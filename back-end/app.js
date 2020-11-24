const express = require('express');
const cors = require('cors');
const mqtt = require('./controllers/mqttController')

const indexRouter = require('./routes');
const boatRouter = require('./routes/boatRouter');

const app = express();

const mongoose = require('mongoose');
const mongoDB =
    'mongodb+srv://boatMcBoatFace:iamaboat@cluster0.a7ccq.mongodb.net/boatDb?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/boat', boatRouter);

module.exports = app;
