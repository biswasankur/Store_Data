const mongoose = require('mongoose')
const Schema = mongoose.Schema
const storeSchema = new Schema({
    tagline1: {
        type: String,
        required: true
    },
    tagline2: {
        type: String,
        required: true
    },
    // check: {
    //     type: String,
    //     required: true,
    //     enum: [
    //         true, false
    //     ]
    // },

    // D2C_FLG: {
    //     type: String,
    //     required: true,

    // },
    // D2C_REGSTRATN_FLG: {
    //     type: String,
    //     required: true
    // },
    // D2C_LOGIN_FLG: {
    //     type: String,
    //     required: true
    // },
    // B2B_LOGIN_FLG: {
    //     type: String,
    //     required: true
    // },
    // B2B_FLG: {
    //     type: String,
    //     required: true
    // },
    // B2B_BO_REGSTRATN_FLG: {
    //     type: String,
    //     required: true
    // },
    // LASTMILE_DLVRY_FLG: {
    //     type: String,
    //     required: true
    // },
    // SERVICES_FLG: {
    //     type: String,
    //     required: true
    // },
    // DOC_APP_ALSO_MARKETPLACE_FLG: {
    //     type: String,
    //     required: true
    // },
    // checkBox: {
    //     type: Array,
    //     required: true
    // },

    photo: {
        type: String,
        required: true
    },

    company_name: {
        type: String,
        required: true
    },

    // display_img: {
    //     type: String,
    //     required: true
    // },



}, { timestamps: true })
const StoreModel = new mongoose.model('store', storeSchema);
module.exports = StoreModel;