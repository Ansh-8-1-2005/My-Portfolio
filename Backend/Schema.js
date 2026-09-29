const joi = require("joi");

const contactJoiSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    message: joi.string().required()
});

module.exports = {contactJoiSchema};