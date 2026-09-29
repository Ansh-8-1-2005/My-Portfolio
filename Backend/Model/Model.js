const {model} = require("mongoose");
const {contactSchema} = require("../Schema/Schema");

const Contact = new model("Contact" , contactSchema);

module.exports = {Contact};