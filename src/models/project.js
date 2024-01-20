const mongoose = require("mongoose");

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
        type : mongoose.Schema.Types.ObjectId,
        ref : "Contractor"  
    },
    homeowner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Homeowner"
    },
    createdAt : {
        type : Date,
        default: Date.now()
    },
    updatedAt : {
        type : Date
    }
});

module.exports = mongoose.model("Project", projectSchema);