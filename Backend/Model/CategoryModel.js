const mongoose = require("mongoose")

const categroySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
})
const Category = mongoose.model("category",categroySchema)
module.exports = Category