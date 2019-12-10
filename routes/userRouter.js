const router = require('express').Router();
const User = require('../models/userModel');

router.get('/', (req,res) => {
    User.find().then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error' + err))
});

// Post end point
router.post('/add', (req,res)=> {
    const username = req.body.username; // this is called username but it will act as the owner in the future
    const newUser = new User({username})
    // create a new instance of newUser
    newUser.save()
    // save the user to databaste
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;