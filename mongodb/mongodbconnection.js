const mongoose = require('mongoose');

mongoose.connect("***************",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("successfully connected to mongodb");
}).catch((err)=>{
    console.error("Error connecting to MongoDb")
})


module.exports = mongoose.connect;
