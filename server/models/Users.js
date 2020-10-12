const mongoose = require('mongoose') ;
// const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') ;
const Blog = require('../models/Blog')



const {Schema} = mongoose ;
const UserSchema = new Schema (
    {
        Username: {
            type:String ,
            required:true,
        },
        ProfilePic:{
           type: String,
            default : 'avatar.jpg'
        },
        Email:{
            type:String,
           //TODO make this unique
           
        },
        Info:String ,
        Gender:String,
        password:{
            type:String,
            minlength:7
        }, tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        socialMediaHandles:{
            twitterId:{
               type:String
            },
            facebookId:{
                type:String
            },
            githubId:{
                type:String
            },
            googleId:{
                type:String
            },
        },
        OwnBlog:[{
            type:Schema.Types.ObjectId,
            ref:'Blog'
        }],
        Co_Owner:[{
            type:Schema.Types.ObjectId,
            ref:'Blog'
        }],
        Followed_Blogs:[{
            type:Schema.Types.ObjectId,
            ref:'Blog'
        }],
       membership :{
           type : Schema.Types.ObjectId ,
           ref:'Memebrship'
       }
        
    },{
        timestamps:true
    }
)





UserSchema.pre('save', async function (next) {
    
    const user = this
   
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})




UserSchema.methods.generateAuthToken = async function() {
   
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}





UserSchema.statics.findByCredentials = async (email, password) => {
  
    const user = await Users.findOne({ Email:email} )
   
    if (!user) {
        
        throw new Error({ error: 'Invalid login credentials' })
    }
   
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }

    console.log("hi")
    return user
}




UserSchema.methods.RecommendArticles = async function(){
    
    const user= this ; 
    const result=[] ;

    // await user.populate('Followed_Blogs').execPopulate() ; 
    // user.Followed_Blogs.sort(compareFollowers)
    // user.Followed_Blogs.forEach(async (b)=> {
    //     await b.where('Publish_date').gte(Date.now()).populate({path:'Articles',
    //     sort:{'Upvotes':1,'Downvotes':-1,'Publish_date':1}}).execPopulate() ;
    //     result= result.concat(b.Articles)  ;
    // })
    return result ;
}

function compareFollowers(a,b){
    if(a.Follwers.length>b.Follwers.length){
        return 1 ;
    }
    return -1
}
function comparevotes(a,b){
    if(a.Upvotes>b.Upvotes){
        return 1 ;
    }else if(a.Downvotes<b.Downvotes){
        return 1
    }
    return -1
}


const Users = mongoose.model('Users', UserSchema);
module.exports = Users ;