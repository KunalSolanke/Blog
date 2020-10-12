const mongoose = require('mongoose') ;
const {Schema} = mongoose  ;
const Blog = require('../models/Blog')
const Comment = require('../models/Comments')

const ArticleSchema = new Schema({
      Body:{
         type: String,
         required:true ,
         trim:true
      },
      Blogname:{
          type:String,
          required:true},
      Title:{
          type:String,
          trim:true,
          required:true ,
      },
      ArticleHeroImage:String ,
      Publisher:{ 
            type:String,
            trim:true,
            required:true
      },
      Publish_date:{
           type:Date,
           default:Date.now()
      },
      Comments:[{
          type:Schema.Types.ObjectId,
          ref:'Comments'
      }],
      Upvotes:[{
          name:String
      }],
      Downvotes:[{
          name:String
      }]
    
},
{
    timestamps:true
})




ArticleSchema.pre('save',async function(next){
    const article= this ;
    if(article.isModified('Blogname')){
       const blog= await Blog.findOne({BlogName:article.Blogname}) ;
       
       blog.Articles= blog.Articles.concat(article._id) ;
       blog.save() ;
    }
    next() ;
})




ArticleSchema.pre('remove',async function(next){
    
    const article= this ;
    const blog =await Blog.updateOne({'BlogName':article.Blogname},{$pull:{'Articles':article._id}}) ;
    await Comment.deleteMany({article:article.Title}) ;
    next() ;
})



const Article= mongoose.model("Articles",ArticleSchema) ;
module.exports = Article;