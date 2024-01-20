const mongoose = require("mongoose");
const userSchema = require("./users");

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    budget:{
        type : Number
    },
    status : {
        type : String,
        enum : ["Assigned", "Completed", "Unassigned"],
        default : "Unassigned"
    },
    assignedContractor : {
        type : contractorSchema
    },
    quotes : [
        {
            type : quoteSchema
        }
    ]
});

const quoteSchema = new mongoose.Schema({
    contractor : {
        type : contractorSchema,
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
    }
});

const orderSchema = new mongoose.Schema({
    supplier : {

    },
    product : {
        //Itemised breakdown (each product/material with pricing, quantity and subtotal)
    },
    additionalCosts: {
//(labor, delivery fees, other fees, taxes)
    },
    associatedProject : {

    },
    status : {
        type : String
    }
});

const homeOwnerSchema = new mongoose.Schema({
    user : {
        type : userSchema,
        required : True
    },
    address : {
        type : String
    },
    projects : [
        {
            type : projectSchema,
        }
    ],
    orders : [
        {
            type : orderSchema
        }
    ]
});

module.exports = mongoose.model("homeowner", homeOwnerSchema);

