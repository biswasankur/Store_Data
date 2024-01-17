const mongoose = require('mongoose');
const Schema = mongoose.Schema
const InventorySchema = new Schema({

   name: {
        type: String,
        required: true,
    },
    pub_Inv_Name: {
        type: String,
        required: true,
    },
    pub_Inv_TypeName: {
        type: String,
        required: true,
    },
    pubAdtype_Name: {
        type: String,
        required: true,
    },
    pubAdUnit_Name: {
        type: String,
        required: true,
    },
    exch_inv_id: {
        type: String,
        required: true,
    },
    exch_inv_Name: {
        type: String,
        required: true,
    },
    exch_inv_TypeName: {
        type: String,
        required: true,
    },
    exch_Type_Name: {
        type: String,
        required: true,
    },
    exch_Adunit_Name: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    active_flag: {
        type: String,
        required: true,
        // enum: [
        //     true, false
        // ]
    },
})
const InventoryModel = new mongoose.model('Inventroy', InventorySchema)
module.exports = InventoryModel