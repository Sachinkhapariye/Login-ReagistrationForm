const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/sachin",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("successfully connected to mongodb");
}).catch((err)=>{
    console.error("Error connecting to MongoDb")
})


module.exports = mongoose.connect;