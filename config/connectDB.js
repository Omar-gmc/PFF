const mongoose=require("mongoose");
require("dotenv").config({path: "./config/.env"});




module.exports=async function () {
    try {
        await mongoose.connect(process.env.Mongo_URI,{ useUnifiedTopology: true ,useNewUrlParser: true});
        console.log("the Database is connected......")
    } catch (error) {
        console.log("error with connection to the dataBase")
    }
};