const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// save mongoose and Schema set up for the models
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    // Setting up user Scehma that will be created inside theDB
},{
    timestamps: true,
})
const User = mongoose.model('User', userSchema);
module.exports = User;
// exporting the user Schema