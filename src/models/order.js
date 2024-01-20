const supplierSchema = new mongoose.Schema({
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

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    unitPrice: {
        type : Number,
        required : true
    }
});


const orderSchema = new mongoose.Schema({
    supplier : {
        type : supplierSchema
    },
    homeOwner : {
        type : homeOwnerSchema
    },
    product : {
        type : productSchema
    },
    additionalCosts:[
        {
            deliveryFee : Number,
            installationFee :  Number
        }
    ],
    status : {
        type : String,
        enum : ["Pending", "Accepted", "Delivered"]
    }
});