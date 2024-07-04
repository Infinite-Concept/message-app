const express = require('express');
const mongoose = require("mongoose")
const user = require("./Router/user")
const cors = require("cors")
require("dotenv").config()

const app = express()
const port = process.env.PORT

mongoose.connect("mongodb://localhost/messaging")
.then(() => {
    app.listen(port, () => {
        console.log(`server listening on port ${port} with database connected`);
    })
})
.catch((err) => {
    console.log("unable to connect to database", err);
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/user", user)