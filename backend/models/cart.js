const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Dname: String,
    spec: Array,
    price: String, 
    img: String, 
    category: String,
    quantity: Number
});

module.exports = mongoose.model('cart',dataSchema);