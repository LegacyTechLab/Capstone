const mongoose = require("mongoose");
const userSchema = require("./users");

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    orders : [
        {type : orderSchema}
    ]
});

const orderSchema = new mongoose.Schema({
    contractor : {

    },
    amount : {

    },
    status : {

    }
});

const supplierSchema = new mongoose.Schema({
    user : {
        type : userSchema,
        required : true
    },
    businessAddress : {
        type : String
    },
    products : [
        {
            type : productSchema,
        }
    ]
});


module.exports = mongoose.model("supplier", supplierSchema);

