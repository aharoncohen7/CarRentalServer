const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  // Reference to the customer who is renting the car
  customerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Customer', 
    required: true,
    index: true // Adding an index for performance optimization
  },
  // Reference to the rented car
  carId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Car', 
    required: true,
    index: true // Adding an index for performance optimization
  },
  from: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        // השוואת תאריכים ללא שעות
        const today = new Date();
        return new Date(value.toDateString()) >= new Date(today.toDateString());
      },
      message: 'Taken date should be today or a future date .'
    }
  },
  // Rental end date
  to: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return value > this.from;
      },
      message: 'Return date should be after the taken date.'
    }
  },
  // Quantity of cars rented
  quantity: { 
    type: Number, 
    required: true 
  },
  // Total price of the rental
  totalPrice: { 
    type: Number, 
    // required: true 
  },
  // Additional notes for the rental
  notes: { 
    type: String,
    default: ''  
  },
  // Payment status
  isPaid: { 
    type: Boolean, 
    default: false 
  },
  // Order status
  status: { 
    type: String, 
    enum: ['open', 'closed'], 
    default: 'open' 
  },
  // Order creation date
  orderDate: { 
    type: Date, 
    default: Date.now 
  },
});

// Pre-save middleware to calculate totalPrice
rentalSchema.pre('save', async function (next) {
  if (this.isModified('from') || this.isModified('to') || this.isModified('carId')) {
    try {
      // Fetch the car's daily rate
      const car = await mongoose.model('Car').findById(this.carId);
      const dailyRate = car.dailyRate;

      // Calculate the number of rental days
      const rentalDays = Math.ceil((this.to - this.from) / (1000 * 60 * 60 * 24));
      this.totalPrice = dailyRate * rentalDays * this.quantity;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

// Create or reuse the Rental model
module.exports =  mongoose.model('Rental', rentalSchema);


