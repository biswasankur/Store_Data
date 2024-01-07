const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// const multer = require('multer')
const path = require('path')
// const jwt=require('jsonwebtoken')
const app = express();
const port = process.env.PORT || 2100
const ApiRoute = require('./route/apiRoute')
const dbLink = "mongodb+srv://souvikdb:1V8UhcbKfOpXCGpS@cluster0.bsndvpo.mongodb.net/VegetablesAndFruits";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/uploads',express.static('uploads'))


app.use(express.static(path.join(__dirname, 'public')));




app.use(ApiRoute)



mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`Server Running http://localhost:${port}`);
            console.log("Database Connected");
        })
    })