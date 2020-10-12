const express = require('express')
const jwt =require('jsonwebtoken')
const router = express.Router()
const userrouter=require("./user")
const blogrouter=require("./blog") 
const listendpoints =require('express-list-endpoints') ;








//refreshing the token
router.post('/token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_KEY, async  (err, user) => {
        const currentuser = await User.findOne({_id:user._id})
        console.log(currentuser)
        if (err || !currentuser.tokens.filter(token=> {
            return token.token=== token 
        }) ){
            return res.sendStatus(403);
        }
        
        const accessToken = jwt.sign({_id:user._id}, process.env.ACCESS_JWT, { expiresIn: '20m' });

        res.json({
            accessToken
        });
    });
});


router.get('/recommended',async(req,res)=>{
    res.send("will do need a perfect alogorithm")
})



router.use("/users",userrouter) ;
router.use("/blog",blogrouter) ;
router.get("/",(req,res)=>{
    res.send(listendpoints(router))
})






module.exports = router
