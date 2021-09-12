const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 2020;
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
//const access = require("./access.json");
const { MongoClient } = require('mongodb');
//const uri = access.atlas_mongo_uri;
//const imdb_api_key = access.imdb_api_key;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get("/", (req, res) => {
    res.send("Backend here !")
});
app.post("/user", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) {
                res.status(500).send({ error: "Sorry, something went wrong !" })
                throw err
            };
            var dbo = db.db("<db_name>");
            dbo.collection("users").findOne(req.body, function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                if (result === null) res.send("NO");
                else res.send("OK");
                console.log(result);
                db.close();
            });
        });
    } catch (e) {
        res.status(500).send({ error: "Sorry, something went wrong !" })
        console.error("an exception here ..");
    }
}) 

app.listen(process.env.PORT || port, () => console.log("Listening on " + port));
