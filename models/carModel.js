const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// save mongoose and Schema set up for the models

const carSchema = new Schema({
    owner: { type: String, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    registrationNumber: {type: Number, required: true},
    releaseYear: {type: Number, required: true}
});
const Car = mongoose.model('Cars', carSchema);
module.exports = Car;