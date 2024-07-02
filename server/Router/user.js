const router = require("express").Router()
const User = require("../model/user")
require("dotenv").config()

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN

const client = require("twilio")(accountSid, authToken);

router.post("/register", async (req, res) => {
    try {

        const{phoneNumber} = req.body

        const findPhone = await User.findOne({phoneNumber})

        if(findPhone){
            return res.status(200).json({findPhone})
        }

        const random = Math.floor(100000 + Math.random() * 900000).toString();

        const sendMessage = await client.messages.create({
            body: `Your message verification code is ${random}`,
            from: "09058738353",
            to: phoneNumber
        })

        if(!sendMessage){
            res.status(500).json({message: "Unable to send message"})
        }

        const savedData = new User({
            phoneNumber: phoneNumber,
            verifyCode: random
        })

        await savedData.save()
        res.status(200).json({message: "successful created name"})

    } catch (error) {
        console.log("connection error", error);
        res.status(500).json({message: "Internal server error"})
    }
})

router.post("/confirmation-code", async (req, res) => {
    
})

module.exports = router