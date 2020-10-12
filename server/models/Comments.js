const mongoose = require('mongoose') ;
const {Schema} = mongoose  ;
const Article= require('../models/Article')



const CommentSchema = new Schema({
      Comment:{
         type: String,
         required:true ,
         trim:true
      },
      Publisher:{
           trim:true,
           type:String,
           required:true
      },
      replies:[{
        id:Schema.Types.ObjectId ,
        reply:{
          type:String
      }}],
      article:{
            type:String,
            required:true,
            trim:true 
      },
      Likes:[
        {
          name:String
        }
      ],
      Dislikes:[
        {
          name:String
        }
      ]

      
    
},
{
    timestamps:true
})



CommentSchema.pre('save',async function(next){
  const comment= this ;

  if(comment.isModified('article')){
     const article= await Article.findOne({Title:comment.article}) ;
     article.Comments= article.Comments.concat(comment._id) 
     await  article.save() ;
  }
  next() ;
})

CommentSchema.pre('remove',async function(next){
  const comment= this ;
  const article = await Article.updateOne({'Title':comment.article},{$pull:{'Comments':comment_id}}) ;
  next() ;
})


const Comment= mongoose.model("Comments",CommentSchema) ;
module.exports = Comment ;