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



Route.post('/addInv',ApiController.Addinventory)
Route.get('/getinv',ApiController.getInv)
Route.get('/singles/:id',ApiController.singleinv)
Route.get('/edit/:id',ApiController.edit)
Route.put('/updateUser/:id', ApiController.update)

// product 
Route.post('/productAdd',logoimage.single('photo'), ApiController.AddProduct)
Route.get('/productGet', ApiController.getproduct)
Route.get('/singleProduct/:id', ApiController.singleProduct)



module.exports=Route;