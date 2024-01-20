const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true,
        lowercase : true
    },
    password: {
        type : String,
        required : true,
        minLength : 6
    },
    firstName : {
        type : String,
        required : true,
        minLength : 0,
        maxLength : 255
    },
    lastName : {
        type : String,
        required : true,
        minLength : 0,
        maxLength : 255
    },
    phoneNumber : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        enum : ["Homeowner", "Contractor","Supplier"],
        required : true
    },
    yearsOfExperience : {
        type : Number,
        minLength : 0,
        required: true
    },
    businessAddress : {
        type : String,
        required : true
    },
    commsPreference : {
        type : String,
        enum : ["Email", "Phone Number", "WhatsApp"]
    },
    references : {
        type : String
    },
    workSchedule : {
        type : String
    },
    licensing :{
        type : Boolean
    },
    insurance : {
        type : Boolean
    },
    scopeOfWork : {
        type : String,
        enum : ["Speific tasks", "Full project management"] 
    },
    createdAt : {
        type : Date,
        default: Date.now()
    },
    updatedAt : {
        type : Date
    }
});


module.exports = mongoose.model("Contractor", contractorSchema);