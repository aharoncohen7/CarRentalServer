const express = require('express');
const router = express.Router();
const CustomerService = require('../BL/services/customer.service');


// Add a new
router.post('/create', async (req, res) => {
  try {
    const customer = await CustomerService.createCustomerService(req.body)
    res.send(customer)
  }
  catch (err) {
    console.log({ err })
    res.status(400).send(err)
  }
})

// Get all 
router.post('/', async (req, res) => {
  try {
    res.send(await CustomerService.getAllCustomersService(req.body))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// Get single by unique key 
router.get('/by-license/:driverLicense', async (req, res) => {
  try {
    res.send(await CustomerService.getSingleCustomerService(req.params.driverLicense))
  }
  catch (err) {
    res.status(400).send(err)
  }
})
// Get single by id 
router.get('/:id', async (req, res) => {
  try {
    res.send(await CustomerService.readCustomerByIdService(req.params.id))
  }
  catch (err) {
    res.status(400).send(err)
  }
})

// update
router.patch('/:id', async (req, res) => {
  try {
    const updatedCustomer = await CustomerService.updateCustomerService(req.params.id, req.body)
    res.send(updatedCustomer)
  }
  catch (err) {
    console.log({ err })
    res.status(400).send(err)
  }
})

// delete 
router.delete('/:id', async (req, res) => {
  try {
    res.send(await CustomerService.deleteCustomerService(req.params.id))
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;

