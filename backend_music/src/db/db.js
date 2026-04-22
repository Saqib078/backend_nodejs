const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("heyy , now i have a storage")
    }
    catch(err){
        console.log("sorry i didnot connect to the db")
        process.exit(1);
    }
}

module.exports = connectDB;