const express = require('express');
const router = express.Router();
const CarService = require('../BL/services/car.service');


// Add a new
router.post('/create', async (req, res) => {
  try {
    const car = await CarService.createCarService(req.body)
    res.send(car)
  }
  catch (err) {
    console.log({ err })
    res.status(400).send(err)
  }
})

// Get all 
router.post('/', async (req, res) => {
  try {
    console.log(req.body, '__❤❤____')
    res.send(await CarService.getAllCarsService(req.body))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// Get single by unique key 
router.get('/by-license/:carLicense', async (req, res) => {
  try {
    res.send(await CarService.getSingleCarService(req.params.carLicense))
  }
  catch (err) {
    res.status(400).send(err)
  }
})
// Get single by id 
router.get('/:id', async (req, res) => {
  try {
    res.send(await CarService.readCarByIdService(req.params.id))
  }
  catch (err) {
    res.status(400).send(err)
  }
})

// update
router.patch('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const updatedCar = await CarService.updateCarService(req.params.id, req.body)
    console.log(updatedCar);
    res.send(updatedCar)
  }
  catch (err) {
    console.log({ err })
    res.status(400).send(err)
  }
})

// delete 
router.delete('/:id', async (req, res) => {
  try {
    res.send(await CarService.deleteCarService(req.params.id))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;

