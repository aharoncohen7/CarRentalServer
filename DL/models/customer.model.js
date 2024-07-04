const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    driverLicense:{
            type: String,
            validate: {
                validator: function (v) {
                    return /^\d{8}$/.test(v);
                },
                message: props => `${props.value} is not a valid driver license number! Please enter exactly 8 digits.`,
            },
            required: true,
            unique: true,
        },
    password: { type: String, required: true, default: '123' },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Please enter exactly 10 digits.`,
        },
        required: true
    },
    address: {
        street: { type: String, },
        houseNumber: { type: Number, },
        city: { type: String,  },
        state: { type: String },
        zipCode: { type: String },
    },
    registeredAt: { type: Date, default: Date.now },
    rentalHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rental' }]
});

module.exports = mongoose.model('Customer', customerSchema);
