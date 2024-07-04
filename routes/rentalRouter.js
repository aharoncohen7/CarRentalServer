const express = require('express');
const router = express.Router();
const RentalService = require('../BL/services/rental.service');


// Add a new
router.post('/create', async (req, res) => {
  try {
    console.log(req.body)
    const rental = await RentalService.createRentalService(req.body)
    console.log(rental)
    res.send(rental)
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
    res.send(await RentalService.getAllRentalsService(req.body))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// Get single by id 
router.get('/:id', async (req, res) => {
  try {
    res.send(await RentalService.readRentalByIdService(req.params.id))
  }
  catch (err) {
    res.status(400).send(err)
  }
})

// update
router.patch('/:id', async (req, res) => {
  try {
    const updatedRental = await RentalService.updateRentalService(req.params.id, req.body)
    res.send(updatedRental)
  }
  catch (err) {
    console.log({ err })
    res.status(400).send(err)
  }
})

// delete 
router.delete('/:id', async (req, res) => {
  try {
    res.send(await RentalService.deleteRentalService(req.params.id))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;

