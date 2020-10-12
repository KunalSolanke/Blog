const Blog= require('../models/Blog') ;

exports.update_post= async (req,res)=>{ 
    try{
        console.log("hi") ;
        const blog= await Blog.findOneAndUpdate({_id:req.params.blogid},req.body);
        await blog.save() ; 
        res.status(200).send(blog)
    }catch(err){
      res.status(404).send({
          error:err,
          req 
      })
    }
}

exports.create_post= async (req,res)=>{
   const user=req.user ;
   try{
       const blog = new Blog({...req.body,BlogCreator:user._id}) ;
       await blog.save() ;
       res.status(201).send(blog) ;

   }catch(err){
       res.status(400).send({
           error:err,
           ...req.body
       }) ;
   }
}


exports.delete_post= async(req,res)=>{
    try{
       const blog=  await Blog.find(req.params.blogid) ;
         blog.remove()
        res.status(200).send("Deleted") ;
    }catch(err){
      res.status(404).send({
          error:err,
          req
      })
    }
}


exports.detail= async (req,res)=>{
  try{
      const blog= await Blog.findById(req.params.blogid) ;
      res.status(200).send(blog) ;
  }catch(err){
    res.status(404).send({
        error:err,
        req
    })
  }
}


exports.articlelist = async (req,res)=> {
    try{
       const blog = await (await Blog.findById(req.params.blogid)) ;
       await blog.populate('Articles').execPopulate()
       res.status(200).send({
           articles:blog.Articles
       })
    }catch(err){
        res.status(404).send({
            error:err,
            req
        })
    }
}

exports.follow = async(req,res)=>{
    try{
        const user = req.user ;
        const blog = await Blog.findById(req.params.blogid) ;
        blog.follow(user._id)
        res.send({
            "message":"Done" ,
            "user_followed":user.Followed_Blogs
        })
    }catch(err){
          res.status(400).send("Fucked up")
    }
}

exports.coauthor = async(req,res)=>{
    try{
        const user = req.user ;
        const blog = await Blog.findById(req.params.blogid) ;
        blog.coauthor(user._id) ;
        await blog.populate('BlogCoAuthors').execPopulate() ;
        res.send({
            "message":"Done" ,
            "user_followed":blog.BlogCoAuthors
        })
    }catch(err){
          res.status(400).send("Fucked up")
    }
}