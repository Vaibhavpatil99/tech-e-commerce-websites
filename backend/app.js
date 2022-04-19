const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
require('dotenv/config')
app.use(cors())
 
app.use(bodyParser.json());

const allRoutes = require('./routes/dataRoutes');
// const cartRoutes = require('/routes/addToRoutes');

app.use('/', allRoutes);
// app.use('/', cartRoutes);



mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false },
    () => console.log('connected to db'))

app.listen(3003);