require("dotenv").config()
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const { Contact } = require("./Model/Model");
const {contactJoiSchema} = require("./Schema");

const ExpressError = require("./utilis/ExpressError");
const wrapasync = require("./utilis/wrapasync");


app.use(cors({
    origin: [
        "https://my-portfolio-frontend-ijaq.onrender.com"
    ],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}

// contact form route
app.post("/Contact", wrapasync(async(req,res)=>{
    const {name, email, message} = req.body;
    const {error} = contactJoiSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error.details[0].message);
    }

    let emailExists = await Contact.findOne({email});
    if(emailExists){
        throw new ExpressError(400, "Form already submitted with this email");
    }else{
        const contact = new Contact({
            name,
            email,
            message
        })

        await contact.save();
        console.log("contact form submitted successfully");
        res.json({message: "contact form submitted successfully"})
    }
    
}))

app.use((err ,req, res, next)=>{
    const {statusCode = 500, message = "Something went wrong"} = err;
    return res.status(statusCode).json({success: false, statusCode, message});
})

app.listen(process.env.PORT , ()=>{
    console.log(`app is listen on port ${process.env.PORT}`);
})