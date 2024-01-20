const Joi = require("joi");

module.exports.signUpValidation= function(req, res, next){
    const schema = Joi.object({
        firstName : Joi.string().required().min(0).max(255).trim(),
        lastName : Joi.string().required().min(0).max(255).trim(),
        email : Joi.string().email().required().trim().lowercase(),
        password : Joi.string().required().min(6),
        userType : Joi.string().required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        res.status(400).json({
            message : "An error occured",
            error : error.details[0].message
        });
        return;
    }
    next();
};
