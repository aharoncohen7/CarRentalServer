const  { connectToMongo }   = require("./connectToMongo")
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const customerRouter = require('./routes/customerRouter');
const rentalRouter = require('./routes/rentalRouter');
const tableRouter = require('./routes/tableRouter');
const { insertData } = require('./insertData')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToMongo()
// insert fake data in the first running 
// insertData()

// Routes
app.use('/api/cars', carRoutes);
app.use('/api/customers',customerRouter)
app.use('/api/rentals',rentalRouter)
app.use('/api/tables',tableRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));