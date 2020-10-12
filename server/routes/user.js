const router = require('express').Router() ;
const listendpoints = require('express-list-endpoints') ;
const auth= require('../middlewares/auth') ;
const controller= require('../controllers/users') ;





router.post("/signup",controller.signup) ;
router.post('/login',controller.login) ;
router.get('/profile',auth,controller.profile) ;
router.post('/profile/update',auth,controller.update_post)
router.post('/profile/logout',auth,controller.logout)
router.post('/profile/lofoutAll',auth,controller.logoutALL);
router.get('/recommended',auth,controller.recommended) ;
router.get('/bloglist',auth,controller.bloglist) ;






router.get('/',(req,res)=>{
    res.send(listendpoints(router))
})




module.exports = router ;