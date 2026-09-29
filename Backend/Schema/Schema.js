const {Schema} = require("mongoose");

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        message: {
            type: String,
            required: true
        }
    }
) ;

module.exports = {contactSchema}