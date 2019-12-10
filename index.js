const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
// cors middleware

app.use(express.json());
// parsing the responde to json

const uri = process.env.ATLAS_URI || 'mongodb://localhost:27017/mern_cars';

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('once', ()=> console.log('Connected to DB'))

// Routes
const carsRouter = require('./routes/carsRouter')
const userRouter = require('./routes/userRouter')

// We need to be inside this end point
app.use('/cars', carsRouter)
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})