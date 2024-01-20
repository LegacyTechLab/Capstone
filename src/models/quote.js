const mongoose= require("mongoose");


const contractorSchema = new mongoose.Schema({
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
    contractor : {
        type : contractorSchema,
        required : true
    },
    project : {
        type : projectSchema,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    status : {
        type : String,
        enum : ["Accepted", "Pending", "Rejected"],
        default : "Pending"
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});