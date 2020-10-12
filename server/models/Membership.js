const mongoose =require('mongoose')
const Activity = mongoose.Schema({
   user :{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User'
   },
   events :[{
       name :String,
       message :String
   }],
   read:{
       type:Number
   },
   write:{
       type:Number
   }
    
},{
    timestamps:true
})


const Activity= mongoose.model('Activty', UserSchema);
module.exports = Activity ;