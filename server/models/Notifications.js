const {Schema, SchemaTypes} =require('mongoose') ;



const NotificationSchema= new Schema({
    user:{
        type :Schema.Types.ObjectId,
        ref : 'User',

    },
    content :{
        type :String
    }
},{
    timestamps:true
})