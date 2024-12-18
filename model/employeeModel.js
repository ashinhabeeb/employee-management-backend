const mongoose = require('mongoose')

const employeesSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const users = mongoose.model('users',employeesSchema)

module.exports = users