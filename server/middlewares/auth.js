const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const fetch = require('isomorphic-unfetch')
const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.ACCESS_JWT)
    try {
        const user = await User.findOne({ _id: data._id})
        if (!user) {
            throw new Error()
        }
        req.user = user
        next()
    } catch (error) {
        const refreshToken = req.cookies[__refreshToken] ;
        console.log(refreshToken) ;
        const user = await (await User.find().where('token')).in(refreshToken) ;
        if(user.exists()){
                   fetch('/token',{
                       method:'GET',
                       mode:'same-origin',
                       credentials:true ,
                       body:{token},
                       headers:{'Content-Type':'application/json'}

                   }).then(res=>{
                       const  json = res.json() ;
                       req.accessToken= json.token ;
                   })
        }else{
        res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    }

}
module.exports = auth