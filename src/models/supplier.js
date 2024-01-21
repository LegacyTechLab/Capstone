const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
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
    businessAddress : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default: Date.now()
    },
    updatedAt : {
        type : Date
    }
});


module.exports = mongoose.model("Supplier", supplierSchema);

