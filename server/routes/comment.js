const router = require('express').Router() ;
const listendpoints = require('express-list-endpoints') ;
const auth= require('../middlewares/auth') ;
const controller= require('../controllers/comment') ;





router.post("/create",auth,controller.create_post) ;
router.post('/:commentid/delete',auth,controller.delete_post) ;
router.post('/:commentid/update',auth,controller.update_post) ;
router.get('/:commentid/detail',auth,controller.detail) ;
router.post('/:commentid/reply',controller.reply) ;
router.get('/:commentid/replylist',controller.replylist) ;
// router.post('/:blogid/like',auth,controller.like)
// router.post('/:blogid/dislike',auth,controller.dislite)






router.get('/',(req,res)=>{
    res.send(listendpoints(router))
})




module.exports = router ;