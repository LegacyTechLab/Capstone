const mongoose = require("mongoose");
const userSchema = require("./users");


const homeOwnerSchema = new mongoose.Schema({
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    }
});

const projectSchema = new mongoose.Schema({
    name : {
        type : String
    }
});

const quoteSchema = new mongoose.Schema({
    homeowner : {
        type: homeOwnerSchema
    },
    project : {
        type : projectSchema
    },
    amount : {
        type: Number
    },
    status : {
        type : String,
        enum : ["Accepted", "Pending", "Rejected"]
    },
    dateAvailable : {
        type : Date
    },
    priorExperience : {
        type : Boolean
    },
    paymentTerms : {
        type : String
    }
});

const contractorSchema = new mongoose.Schema({
    user : {
        type : userSchema,
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
    quotes : [
        {type : quoteSchema}
    ]
});


module.exports = mongoose.model("contractor", contractorSchema);