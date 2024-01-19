const storeModel = require('../model/store');
const UserModel = require('../model/user');
const InventoryModel=require('../model/inventory')
const ProductModel=require('../model/product');

const config = require('../config/config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { log } = require('console');

//====================================Users Registation======================================================
const SecurePassword = async (password, req, res) => {
    try {
        const Hashpassword = await bcryptjs.hash(password, 10);
        return Hashpassword;
    } catch (error) {
        console.log("secure pass:", error);
        res.status(404).json(error.message)
    }
}

const CreateToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secrect_key, { expiresIn: "5m" });
        return token;
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}
// exports.signUp = async (req, res) => {
//     try {
//         const Passwordhash = await SecurePassword(req.body.password)
//         // const image=req.file;
//         const user = await new UserModel({
//             name: req.body.name,
//             email: req.body.email,
//             contact: req.body.contact,
//             // image:image.path,
//             image: req.files[0].filename,
//             password: Passwordhash,
//         })
//         const duplicateEmail = await UserModel.findOne({ email: req.body.email })
//         if (duplicateEmail) {
//             res.status(400).json({ success: false, message: "email already exist" });
//         } else {
//             const result = await user.save()
//             // const token = await CreateToken(result._id);
//             res.status(200).json({ success: true, msg: "User Registered Successfully", data: result, status: 200 })
//         }
//     } catch (error) {
//         // console.log(error);
//         res.status(404).json({ success: false, msg: "User Not Registered" })
//     }
// }
exports.signUp = async (req, res) => {
    try {
        const PasswordHash = await SecurePassword(req.body.password)
        console.log(req.body);
        const user = await new UserModel({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            // password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
            password: PasswordHash
        })
        if (req.file) {
            user.image = req.file.path
        }
        const duplicateEmail = await UserModel.findOne({ email: req.body.email })
        if (duplicateEmail) {
            res.status(400).json({ success: false, message: "email already exist" });
        } else {
            const result = await user.save()
            const token = await CreateToken(result._id);

            res.status(200).json({ success: true, msg: "user successfully added", 'toten': token, data: result })
        }
    } catch (error) {
        console.log("registation ", error);
        res.status(404).json({ success: false, msg: "user not added" })
    }

}



exports.store = async (req, res) => {
    try {
        // console.log(req.files);
        const addstore = await new storeModel({
            tagline1: req.body.tagline1,
            tagline2: req.body.tagline2,
            checkBox: req.body.checkBox,
            company_name: req.body.company_name,
            store_url: req.body.store_url,
            // photo: req.files[0].filename,

        })
        if (req.file) {
            addstore.photo = req.file.path
        }
        const responce = await addstore.save()
        res.status(201).json({ success: true, msg: "store Added Successfully", data: responce, status: 201 })

    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: "store Not Added" })

    }
}


exports.getStore = async (req, res) => {
    try {
        const stores = await storeModel.find()
        res.status(200).json({ success: true, msg: "data added successfully", data: stores, status: true })
    } catch (error) {
        res.status(201).json({ success: false, msg: "data not added" })

    }
}



//====================================Users Login===========================================================

exports.signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        // console.log(req.body);

        if (!(email && password)) {
            return res.status(401).json({ success: false, message: "All input are required", status: 401 })
        }
        const users = await UserModel.findOne({ email })
        if (users && (await bcryptjs.compare(password, users.password))) {
            const token = await CreateToken(users._id)
            return res.status(200).json({ success: true, msg: "Login....", "user": users, status: 200, token: token });
        }
        return res.status(401).json({ success: false, message: "Invalid Credentials", status: 401 });
    }
    catch (error) {
        console.log(error);
    }

}


//====================================single data fatch============================================================

exports.single = async (req, res) => {
    try {
        const single_id = await storeModel.findById(req.params.id)
        console.log(single_id);
        res.status(200).json({ success: true, msg: 'single data fetch successfilly..!', data: single_id, status: 200 })

    } catch (error) {
        res.status(201).json({ success: false, msg: 'data not fetched..!' })

    }
}



exports.Addinventory=async(req,res)=>{
    try {
        const invt = await new InventoryModel({
            name: req.body.name,
            pub_Inv_Name: req.body.pub_Inv_Name,
            pub_Inv_TypeName: req.body.pub_Inv_TypeName,
            pubAdtype_Name: req.body.pubAdtype_Name,
            pubAdUnit_Name: req.body.pubAdUnit_Name,
            exch_inv_id: req.body.exch_inv_id,
            exch_inv_Name: req.body.exch_inv_Name,
            exch_inv_TypeName: req.body.exch_inv_TypeName,
            exch_Type_Name: req.body.exch_Type_Name,
            exch_Adunit_Name: req.body.exch_Adunit_Name,
            fee: req.body.fee,
            active_flag: req.body.active_flag,
        })
        const invt_data = await invt.save();
        res.status(200).send({ success: true, msg: "add inventory data", data: invt_data })
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, msg: "not save" })
    }
}


exports.getInv = async (req, res) => {
    try {
        const Result = await InventoryModel.find();
        res.status(200).json({success:true, msg:"fatch data", data:Result})
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: "not found" })

    }
}

exports.singleinv = async (req, res) => {
    try {
        const single_id = await InventoryModel.findById(req.params.id)
        // console.log(single_id);
        res.status(200).json({ success: true, msg: 'single data fetch successfilly..!', data: single_id, status: 200 })

    } catch (error) {
        res.status(201).json({ success: false, msg: 'data not fetched..!' })

    }
}



exports.edit = async (req, res) => {

    try {
        const id = req.params.id
        const edit = await InventoryModel.findById(id);
        res.status(200).json({ success: true, msg: "get Single data", data: edit })
    } catch (error) {
        res.status(404).json({ success: false, msg: "data not found" })
    }
}


//update
exports.update = async (req, res) => {
    try {
        const _id = req.params.id
        const updateUser = await InventoryModel.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).json({ success: true, msg: "Employee succussfully Update", data: updateUser })

    } catch (ex) {
        res.status(404).json({ success: false, msg: "Employee Not Update" })
    }
}



exports.AddProduct=async(req,res)=>{
    try {
        const product = await new ProductModel({
            product_name: req.body.product_name,
            price: req.body.price,
            quantity: req.body.quantity,
            unit: req.body.unit,
            size: req.body.size,
            packaging_type: req.body.packaging_type,
        })
        if (req.file) {
            product.photo = req.file.path
        }
        const product_data = await product.save();
        res.status(200).send({ success: true, msg: "Add Product Successfully", data: product_data })
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, msg: "not save" })
    }
}

exports.getproduct = async (req, res) => {

    try {
        const product = await ProductModel.find();
        res.status(200).json({ success: true, msg: "Get Product", data: product })
    } catch (error) {
        res.status(404).json({ success: false, msg: "data not found" })
    }
}


exports.singleProduct = async (req, res) => {
    try {
        const single_id = await ProductModel.findById(req.params.id)
        console.log(single_id);
        res.status(200).json({ success: true, msg: 'single data fetch successfilly..', data: single_id, status: 200 })

    } catch (error) {
        res.status(201).json({ success: false, msg: 'data not fetched..!' })

    }
}