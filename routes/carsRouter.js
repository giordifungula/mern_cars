const router = require('express').Router();
const Cars = require('../models/carModel');

router.get('/', (req,res) => {
    Cars.find().then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error' + err))
});
// Endpoints
router.post('/add', (req,res) => {
    const owner = req.body.owner;
    const model = req.body.model;
    const make = req.body.make;
    const registrationNumber = req.body.registrationNumber;
    // getting the user data from req.body props
const newCar = new Cars({
    owner,
    make,
    model,
    registrationNumber
    // Order is important when it comes to creating the data base, we can change the order later to this it ??
})
// Save the Car
newCar.save()
// Write test for the data being created
.then(() => res.json('Car added!'))
})
// Get selected Car
router.get('/:id',(req,res) => {
    const id = req.params.id
    console.log("You have choosen to find the id" + id)
    Cars.findById(id).then(car => res.json(car))
    .catch(err => res.status(400).json('Error: '+ err))
})
// Delete Selected Car
router.delete('/:id', (req,res) => {
    const id = req.params.id
    Cars.findByIdAndDelete(id).then(() => res.json('Car is removed'))
    .catch(err => res.status(400).json('Error' + err))
    console.log("You want to delete this car" + id)
})
// Update selected Car
router.post('/update/:id', (req,res) => {
    const id = req.params.id
    Cars.findById(id)
    // Find the id that you want to update
    .then(car => {
        car.owner = req.body.owner;
        car.make = req.body.make;
        car.model = req.body.model;
        car.registrationNumber = req.body.registrationNumber;
        car.save()
        .then(() => res.json('Car updated'))
        .catch(err => res.status(400).json('Error' + err))
    })
})

// We need to use this end point in our server file , so it must be exported
module.exports = router;
