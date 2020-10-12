const Comment = require('../models/Comments') ;



exports.update_post= async (req,res)=>{ 
    try{
        console.log("hi") ;
        const comment= await Comment.findOneAndUpdate({_id:req.params.Commentid},req.body);
        await comment.save() ; 
        res.status(200).send(comment)
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
       //send  articlename in the body
       console.log(req.body)
       const comment = new Comment({...req.body,Publisher:user.Username}) ;
       console.log(comment)
       await comment.save() ;
       res.status(201).send(comment) ;

   }catch(err){
       res.status(400).send({
           error:err,
           ...req.body
       }) ;
   }
}

exports.list= async (req,res)=>{
    res.send('Not made yet ')
}

exports.delete_post= async(req,res)=>{
    try{
        const comment=  await Comment.findById(req.params.Commentid) ;
        comment.remove()
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
      const comment= await Comment.findById(req.params.Commentid) ;
      res.status(200).send(comment) ;
  }catch(err){
    res.status(404).send({
        error:err,
        req
    })
  }
}


exports.reply = async (req,res) =>{
    try{
        const comment= await Comment.findById(req.params.commentid) ;
        comment.replies= comment.replies.concat(req.body) ;
        comment.save() ;
        res.status(200).send({
            replies:comment.replies 
        })

    }catch(err){
        res.status(400).send("You fucked up again")
    }
}

exports.replylist = async (req,res) =>{
    try{
        const comment= await Comment.findById(req.params.commentid) ;
        res.status(200).send({
            replies:comment.replies 
        })

    }catch(err){
           res.status(400).send("You fucked up again")
    }
}