const Article= require('../models/Article') ;

exports.update_post= async (req,res)=>{ 
    try{
        console.log("hi") ;
        const article= await Article.findOneAndUpdate({_id:req.params.articleid},req.body);
        await article.save() ; 
        res.status(200).send(article)
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
       //send blogname in the body
       const article = new Article({...req.body,Publisher:user.Username}) ;
       await article.save() ;
       res.status(201).send(article) ;

   }catch(err){
       res.status(400).send({
           error:err,
           ...req.body
       }) ;
   }
}

exports.commentlist = async (req,res)=>{
    try{
          const article = await  Article.findById(req.params.articleid) ;
          await article.populate('Comments').execPopulate() ;
          res.send(
              {
                  comments:article.Comments
              }
          )
    }catch(err){
        res.status(400).send({
            error:err,
            ...req.body
        }) ;

    }
}

exports.delete_post= async(req,res)=>{
    try{
         const article=await Article.findById(req.params.articleid) ;
         await article.remove() ;
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
      console.log(req.params.articleid)
      const article= await Article.findById(req.params.articleid) ;
      res.status(200).send(article) ;
  }catch(err){
    res.status(404).send({
        error:err,
        req
    })
  }
}
