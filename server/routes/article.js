const router = require('express').Router() ;
const listendpoints = require('express-list-endpoints') ;
const auth= require('../middlewares/auth') ;
const controller= require('../controllers/article') ;
const commentrouter=require("./comment")





router.post("/create",auth,controller.create_post) ;
router.post('/:articleid/delete',auth,controller.delete_post) ;
router.post('/:articleid/update',auth,controller.update_post)
router.get('/:articleid/detail',auth,controller.detail) ;
router.get('/:articleid/commentlist',auth,controller.commentlist) ;







router.get('/',(req,res)=>{
    res.send(listendpoints(router))
})


router.use("/comment",commentrouter) ;

module.exports = router ;