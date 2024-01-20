const product = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    numberInStock:{
        type : Number,
        required : true
    },
    unitPrice: {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : [],
        required : true
    }
});