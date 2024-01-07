const express = require('express');
const Route = express.Router()
const ApiController = require('../controller/apiController')
const logoimage = require("../middleware/company_logo")





Route.post('/add-store',logoimage.single('photo'), ApiController.store)
// Route.post('/add-store', ApiController.store)
Route.get('/get-store',ApiController.getStore)

Route.post('/signUp',logoimage.single('image'),ApiController.signUp)
Route.post('/signIn',ApiController.signIn)

Route.get('/single/:id',ApiController.single)





module.exports=Route;