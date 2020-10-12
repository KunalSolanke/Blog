const router = require('express').Router() ;
const listendpoints = require('express-list-endpoints') ;
const auth= require('../middlewares/auth') ;
const controller= require('../controllers/blog') ;
const articlerouter=require("./article")







router.post("/create",auth,controller.create_post) ;
router.post('/:blogid/delete',auth,controller.delete_post) ;
router.post('/:blogid/update',auth,controller.update_post)
router.post('/:blogid/follow',auth,controller.follow)
router.post('/:blogid/coauthor',auth,controller.coauthor)
router.get('/:blogid/detail',auth,controller.detail)
router.get('/:blogid/articlelist',auth,controller.articlelist) ;

// router.post('/:blogid/upvote',auth,controller.upvote)
// router.post('/:blogid/downvote',auth,controller.downvote)








router.get('/',(req,res)=>{
    res.send(listendpoints(router))
})


router.use("/article",articlerouter) ;


module.exports = router ;
