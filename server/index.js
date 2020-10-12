const express=require('express') ;
require('dotenv').config() ;
const next=require('next') ;
const helmet =require('helmet') ;
const morgan = require('morgan') ;
const cors  =require('cors') ;
require('./db/db') ;
const User = require('./models/Users')


const dev=process.env.NODE_ENV || 'production' ;
const app= next({dir:".",dev}) ;
const handle= app.getRequestHandler() ;






app.prepare()
.then(()=>{
    const showRouter=require('./routes/index.js')
    const cookieparser=require('cookie-parser')
    const passport = require('passport') ;
    const FacebookStrategy = require('passport-facebook').Strategy
    var  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    

   
    passport.use(new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      async function(accessToken, refreshToken, profile, done) {
        console.log(refreshToken)
      const isuser =await User.exists({ socialMediaHandles:{googleId: profile.id} });
      console.log(!!isuser) ;
        if(!isuser){
          console.log('hi')
            const user=new User() ;
            user.Username=profile.displayName
            user.socialMediaHandles.googleId=profile.id ;
            await user.save() ;
            console.log('hi')
            return done(null,{user,accessToken})
        }
        const user=await User.findOne({ socialMediaHandles:{googleId: profile.id}})
        return done(null,{user,accessToken}) ;
      
    }
  ));
    

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
      },
      async function(accessToken, refreshToken, profile, done) {
          console.log(accessToken,refreshToken,profile)
        const isuser =await User.exists({ socialMediaHandles:{facebookId: profile.id} });
        console.log(!!isuser)
          if(!isuser){
            console.log('hi')
              const user=new User() ;
              user.socialMediaHandles.facebookId=profile.id ;
              user.Username=profile.displayName ;
              await user.save() ;
              console.log('hi')
              return done(null,{user,accessToken})
          }
          const user= await User.find({socialMediaHandles:{facebookId: profile.id}})
          console.log
          return done(null,{user,accessToken}) ;
        
      }
    ));

    passport.serializeUser(function(user,accessToken, done) {
        done(null, {
            accessToken,user
        });
      });
      
      passport.deserializeUser(function(user,accessToken, done) {
        done(null,{
            user,accessToken
        });
      });
   
    const server=express() ;
    server.use(passport.initialize())
   
    server.use(morgan('tiny')) ;
    server.use(express.json()) ;
    server.use(express.urlencoded({ extended: true }));
    server.use(helmet()) ;
    server.use(cookieparser()) ;
    server.use(cors())


    const Port =process.env.PORT || 3000 ;

    server.get('/auth/google',
            passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

     server.get('/auth/google/callback', 
           passport.authenticate('google', { failureRedirect: '/login' }),
                  function(req, res) {
                      
                      res.send(req.user)
                     res.redirect('/dashboard');
                    
            });


  server.get('/auth/facebook', passport.authenticate('facebook'));

  server.get('/auth/facebook/callback',
                          passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }),function(req,res){
                                        
                                        res.send(req.user)
                                        res.redirect('/dashboard');
                                      });


    /* router */
    server.use("/api",showRouter) ;
   


    /* taking all routes from the server and handling the request */
    server.get("*",(req,res)=>{
        return handle(req,res) ;
    })
    



    // listening to port
    server.listen(Port,(err)=>{
        if(err) throw error ;
        console.log(`listening at http://localhost:${Port}`)

    })
})
.catch(ex=>{
    console.log(ex.stack) ;
    process.exit(1) ;
})

module.exports=app ;







