const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: false },
    img: { type: String, required: true },
    categories: { type: String },
    size: { type: Array, required: true },
    color: { type: Array, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema);