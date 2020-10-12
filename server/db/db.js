const mongoose = require('mongoose') ;

//mongodb+srv://<username>:<password>@cluster0-5kg99.gcp.mongodb.net/test?retryWrites=true&w=majority


mongoose.connect(process.env.MONGO_URI, {useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true,
retryWrites:true,
useFindAndModify:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { 
  console.log("we are connected")
}) ;