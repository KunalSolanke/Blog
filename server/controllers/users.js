const jwt =require('jsonwebtoken') ;
const User = require('../models/Users') ;
const Blog = require('../models/Blog')


exports.signup = async (req, res) => {
    
    try {
        console.log(req.body)
        const user = new User(req.body) 
        await user.save()    
        const refreshToken = await user.generateAuthToken() ;      
        const accessToken = jwt.sign({ _id:user._id }, process.env.ACCESS_JWT, { expiresIn: '1m' });
        console.log('hello')
        res.setHeader('Cache-control','private')
        res.cookie('__refreshToken',refreshToken,{
            sameSite:'Strict',
            httpOnly:true,
            maxAge:3600*1000*24 

        })
        
        res.status(201).send({ user, refreshToken,accessToken})
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.login=async(req, res) => {
    
    // try {
        const { Email, password } = req.body;
        const user = await User.findByCredentials(Email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const refreshToken = await user.generateAuthToken() ;      

        const accessToken = jwt.sign({ _id:user._id }, process.env.ACCESS_JWT, { expiresIn: '1m' });
      
        res.setHeader('Cache-control','private')
        res.cookie('__refreshToken',refreshToken,{
            sameSite:'Strict',
            httpOnly:true,
            maxAge:3600*1000*24*5
        })
        

       
       
        res.send({ user, refreshToken,accessToken})
    // } catch (error) {
    //     res.status(400).send(error)
    // }

}


exports.profile = async(req, res) => {
    // View logged in user profile
    res.send(req.user)
}



exports.update_post= function(req,res){
    res.send('Not made yet ')
}


exports.logout= async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.body.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}


exports.logoutALL =async(req, res) => {
    // Logout user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.recommended = async (req,res)=> {
   try {
      const  user = req.user ;
    //   await user.populate({
    //       path:'Followed_Blogs',
    //       sort:{'Followers.length':1}
    //   }).execPopulate()
    //   const recommended = await user.RecommendArticles() ; 
    console.log('hello')
    const blogs = await Blog.find().where('Followers').in(user._id).sort({'Followers.length':1}).populate(
        {
            path:'Articles',
            match:{Publish_date:{$gt:Date.now()}},
            sort:{Upvotes:1,Downvotes:-1,Publish_date:1}
        }
        
    )
    console.log('hello')
      res.send({
          blogs
      })
   }catch(err){
    res.status(400).send({

        "error":err,
        "message":"Try again"
    })
   }
}

exports.bloglist = async (req,res) => {
    try{
        const user =req.user ;
        await user.populate('OwnBlog').execPopulate() 
        const resbody = {
            ownblogs:user.OwnBlog ,
            Co_owner:user.Cowner
        }
        res.status(200).send(resbody)
    }catch(err){
        res.status(400).send({

            "error":err,
            "message":"Try again"
        })
    }
}