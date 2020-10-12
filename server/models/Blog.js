const mongoose = require('mongoose') ;
const {Schema} = mongoose  ;
const User = require('../models/Users')
const Article= require('../models/Article')
const BlogSchema = new Schema({
      BlogName:{
         type: String,
         required:true ,
         trim:true
      },
      BlogCreator:{
          type:Schema.Types.ObjectId,
          required:true ,
          ref:"Users"
      },
      BlogCoAuthors:[{
          ref:'Users',
          type:Schema.Types.ObjectId,
      }] ,
      Followers:[{
          type:Schema.Types.ObjectId,
          ref:'Users'
      }],
      Articles:[{
          type:Schema.Types.ObjectId,
          ref:'Articles'
      }],
      meta :{
        home :{
             background_image :{
                        type:String,
                        default : 'bloghomedefault.jpg'
             }
        },
        BlogLogo:{
            type:String,
        default:'deafultlogo.jpg'},

        BlogInfo:{
           type: String,
           default:'defaultlogo.jpg'},
        followers_count:{
            type:Number
        },
        author_count :{
            type:Number
        }
    }
},
{
    timestamps:true
})





BlogSchema.pre('save',async function(next){
    const blog= this ;
    if(blog.isModified('BlogCreator')){
       const user= await User.findById(blog.BlogCreator) ;
       user.OwnBlog= user.OwnBlog.concat(blog._id) ;
       user.save() ;
    }
    if(blog.isModified('Followers')){
        const user= await User.findById(blog.Followers[Followers.length -1]) ;
        user.Followed_Blogs= user.Followed_Blogs.concat(blog._id) ;
        user.save() ;
    }
    next() ;
})





BlogSchema.pre('remove', async function(next){
    const blog= this ;
    const user = await User.update({'BlogCreator':blog.BlogCreator},{$pull:{'OwnBlog':blog_id,'Follwed_Blogs':blog_id}}) ;
    await Article.deleteMany({Blogname:blog.BlogName}) ;
    next() ;

})

BlogSchema.methods.follow = async function(uid){
    const blog = this ;
    blog.Followers = blog.Followers.concat(uid) ;
    await blog.save() ;
}


BlogSchema.methods.coauthor = async function(uid){
    const blog = this ;
    blog.BlogCoAuthors = blog.BlogCoAuthors.concat(uid) ;
    await blog.save() ;
}



const Blog = mongoose.model("Blog",BlogSchema) ;
module.exports = Blog ;