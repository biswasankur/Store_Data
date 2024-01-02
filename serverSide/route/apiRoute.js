const express = require('express');
const Route = express.Router()
const ApiController = require('../controller/apiController')
const multer= require('multer')


const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        
        callback(null, "./upload");
    },
    filename: (req, file, callback) => {
        callback(null,file.originalname);
    }
});

const uploadFile = multer({
    storage: Storage
});


Route.post('/add-store',uploadFile.any(),ApiController.store)
Route.get('/get-store',ApiController.getStore)

Route.post('/signUp',uploadFile.any(),ApiController.signUp)
Route.post('/signIn',ApiController.signIn)




module.exports=Route;