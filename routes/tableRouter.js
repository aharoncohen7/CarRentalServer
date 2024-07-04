const express = require('express');
const router = express.Router();
const carModel = require('../DL/models/car.model');
const {getTableColumns} = require("../DL/helpers");
const { getCarsForTable } = require('../BL/services/car.service');
const { getCustomersForTable } = require('../BL/services/customer.service');
const { getRentalSForTable } = require('../BL/services/rental.service');

router.get('/:tableName', async (req, res) => {
  try {
    res.send(getTableColumns(req.params.tableName))
  }
  catch (err) {
    res.status(400).send(err)
  }
})
router.post('/:tableName', async (req, res) => {
  try {
    
   
    if(req.params.tableName=="customers"){
      
      res.send(await getCustomersForTable(req.body))
    }
    if(req.params.tableName=="cars"){
      
      res.send(await getCarsForTable(req.body))
    }
    if(req.params.tableName=="rentals"){
      console.log("▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️");
      res.send(await getRentalSForTable(req.body))
    }



  
  
  
  
  
  
  
    }
  catch (err) {
      res.status(400).send(err)
  }
})











module.exports = router;





