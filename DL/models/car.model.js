const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carLicense: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: function(v) {
    //     return /^\d{2}-\d{3}-\d{2}$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid car license number! It should be in the format XX-XXX-XX.`
    // }
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true
  },
  dailyRate: { 
    type: Number, 
    required: true 
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  fuelType: {
    type: String,
    enum: ['petrol', 'diesel', 'electric', 'hybrid'],
    default: 'petrol'
  },
  discount: { type: Number, default: 0 },
  images: [{ type: String }],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);