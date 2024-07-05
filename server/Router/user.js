const router = require("express").Router()
const User = require("../model/user")
require("dotenv").config()

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN

const client = require("twilio")(accountSid, authToken);

router.post("/register", async (req, res) => {
    try {

        const{phoneNumber} = req.body

        if(phoneNumber.length < 10){
            return res.status(400).json({message: "Invalid number"})
        }

        if(phoneNumber.length >= 13){
            return res.status(400).json({message: "Invalid number"})
        }

        const findPhone = await User.findOne({phoneNumber})

        if(findPhone){
            return res.status(200).json({findPhone})
        }

        const random = Math.floor(100000 + Math.random() * 900000).toString();

        // const sendMessage = await client.messages.create({
        //     body: `Your message verification code is ${random}`,
        //     from: "09058738353",
        //     to: phoneNumber
        // })

        // if(!sendMessage){
        //     res.status(500).json({message: "Unable to send message"})
        // }

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
    try {

        
    } catch (error) {
        console.log("connection error", error);
        res.status(500).json({message: "Internal server error"})
    }
})

router.get("/getAll/phoneNumber", async (req, res) => {
    try {
        const phoneNumber = await User.find({}, "phoneNumber");

        if(!phoneNumber){
            res.status(500).json({message: "Internal server error"})
        }

        res.status(200).json({phoneNumber})
    } catch (error) {
        console.log("server error", error);
        res.status(500).json({message: "Internal server error"})
    }
})

router.post("/checkUser", async(req, res) => {
    try {
        const {phoneNumber} = req.body
        const users = await User.find({phoneNumber: { $in: phoneNumber }})
        
        if (users.length > 0) {
            // At least one user found with matching phone number
            console.log(users);
            users.forEach(user => {
                console.log(user.phoneNumber);
                // Additional actions if needed
            });
        } else {
            console.log('No users found in database with these phone numbers.');
        }

    } catch (error) {
        console.log("server error", error);
        res.status(500).json({message: "Internal server error"})
    }
})

module.exports = router