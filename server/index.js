const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 2020;
const { MongoClient } = require('mongodb');

app.get("/", (req, res) => {
    res.send("Backend here !")
});


app.listen(process.env.PORT || port, () => console.log("Listening on " + port));
