const mongoose= require("mongoose");

const quoteSchema = new mongoose.Schema({
    contractor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Contractor"
    },
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Project"
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
    dateAvailable : {
        type : Date
    },
    priorExperience : {
        type : Boolean
    },
    paymentTerms : {
        type : String
    },
    createdAt : {
        type : Date,
        default: Date.now()
    },
    updatedAt : {
        type : Date
    }
});

module.exports = mongoose.model("Quote", quoteSchema);