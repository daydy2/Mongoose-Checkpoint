const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config")
const PORT = 300;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB")
});

app.listen(PORT);