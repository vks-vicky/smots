const mongoose = require("mongoose");
const uri = "mongodb+srv://user_1:supersecret@cluster0.iqgw9.mongodb.net/";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };