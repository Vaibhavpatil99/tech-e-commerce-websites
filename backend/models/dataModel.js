const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Dname: String,
    spec: Array,
    price: String, 
    img: String, 
    category: String,
});

module.exports = mongoose.model('techdatas',dataSchema);