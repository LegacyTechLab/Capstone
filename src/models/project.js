const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    }
});

const homeOwnerSchema = new mongoose.Schema({
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    }
});

const quoteSchema = new mongoose.Schema({
    contractor : {
        type : contractorSchema
    },
    amount : {
        type : Number
    },
    status : {
        type : String
    },
});

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type:{
        type : String,
        enum : ["Renovation", "New construction", "Landscaping"]
    },
    description:{
        type : String,
    },
    budget:{
        type : Number
    },
    timeline:{
        startDate : {
            type : Date
        },
        endDate : {
            type : Date
        }
    },
    permitsRequired : {
        type : Boolean
    },
    permits : [
        {type : String}
    ],
    materialRequirements : {
        type : String
    },
    projectPhase : {
        type : String
    },
    address : {
        type : String
    },
    accessibilityNeeds : {
        type : String
    },
    status : {
        type : String,
        enum : ["Assigned", "Completed", "Unassigned"],
        default : "Unassigned"
    },
    assignedContractor : {
        type : contractorSchema
    },
    homeowner : {
        type : homeOwnerSchema
    },
    quotes : [
        {
            type : quoteSchema
        }
    ]
});

const Project = mongoose.model("project", projectSchema);