const storeModel = require('../model/store');
const UserModel = require('../model/user');
const config = require('../config/config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.store = async (req, res) => {
    try {
        // console.log(req.files);
        const addstore = await new storeModel({
            tagline1: req.body.tagline1,
            tagline2: req.body.tagline2,
            checkBox: req.body.checkBox,
            // D2C_FLG: req.body.D2C_FLG,
            // D2C_REGSTRATN_FLG: req.body.D2CREGSTRATNFLG,
            // D2C_LOGIN_FLG: req.body.D2C_LOGIN_FLG,
            // B2B_LOGIN_FLG: req.body.B2B_LOGIN_FLG,
            // B2B_FLG: req.body.B2B_FLG,
            // B2B_BO_REGSTRATN_FLG: req.body.B2B_BO_REGSTRATN_FLG,
            // LASTMILE_DLVRY_FLG: req.body.LASTMILE_DLVRY_FLG,
            // SERVICES_FLG: req.body.SERVICES_FLG,
            // DOC_APP_ALSO_MARKETPLACE_FLG: req.body.DOC_APP_ALSO_MARKETPLACE_FLG,
            logo: req.files[0].filename,
            // LOGO: req.body.LOGO,
            company_name: req.body.company_name,
            // display_img:req.files[1].filename

        })
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
        res.status(200).json({ success: true, msg: "Users fetch Successfully", data: stores, status: true })
    } catch (error) {
        res.status(201).json({ success: false, msg: "Users Not fetch" })

    }
}

//====================================Users Registation======================================================


const SecurePassword = async (password) => {
    try {
        const HashPassword = await bcryptjs.hash(password, 10);
        return HashPassword;
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const CreateToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secrect_key, { expiresIn: "5m" });
        return token;
    } catch (error) {
        res.status(400).json(error.message)
    }
}
exports.signUp = async (req, res) => {
    try {
        const Passwordhash = await SecurePassword(req.body.password)
        // const image=req.file;
        const user = await new UserModel({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            // image:image.path,
            image: req.files[0].filename,
            password: Passwordhash,
        })
        const duplicateEmail = await UserModel.findOne({ email: req.body.email })
        if (duplicateEmail) {
            res.status(400).json({ success: false, message: "email already exist" });
        } else {
            const result = await user.save()
            const token = await CreateToken(result._id);
            res.status(200).json({ success: true, msg: "User Registered Successfully", data: result, status: 200, 'token': token })
        }
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, msg: "User Not Registered" })
    }
}


//====================================Users Login===========================================================

exports.signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body);

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