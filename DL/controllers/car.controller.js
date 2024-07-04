
const Car = require("../models/car.model")
// Create
const createCar = async (carData) => {
    const { model, carLicense, year, dailyRate } = carData;
    // Validate data
    if (!model) {
        throw "Model is required";
    }
    if (!carLicense) {
        throw "Car license is required";
    }
    if (!year) {
        throw "Year is required";
    }
    if (!dailyRate) {
        throw "Daily rate is required";
    }
    if (!isValidLicense(carLicense)) {
        throw `${carLicense} is not a valid car license number! It should be in the format XX-XXX-XX.`;
    }
    // Check if the car already exists
    const existingCar = await Car.findOne({ carLicense: carLicense || "" })
    if (existingCar) {
        throw (`Car with carLicense: ${carLicense} already exists`)
    }

    return await Car.create(data)
}
// Read
const readCars = (filter) => Car.find(filter)

async function readFlatCars(filter) {
    // Define the fields to include (only flat fields)
    const fieldsToSelect = '_id model year carLicense dailyRate isAvailable fuelType discount updatedAt';
    // Query the database with the filter and select only the flat fields
    const customers = await Car.find(filter).select(fieldsToSelect);
    return customers;
}



const readCarById = (id) => Car.findById({ _id: id })
const readCar = (filter) => Car.findOne(filter)
// Update
const updateCarById = async (id, data) => {
    if (!id) {
        throw "Id is required";
    }
    if (data.carLicense) {
        if (!isValidLicense(data.carLicense)) {
            throw `${data.carLicense} is not a valid car license number! It should be in the format XX-XXX-XX.`;
        }
        // Check if the car License already exists
        const existingCar = await Car.findOne({ carLicense: data.carLicense })
        if (existingCar) {
            throw (`carLicense mast be unique  filed, and Car with carLicense: ${data.carLicense} already exists`)
        }
    }
    const updatedCar = await Car.findByIdAndUpdate(id, data)
    if (!updatedCar) {
        throw `Car with id: ${id} not found`;
    }
    return updatedCar;
}
// Delete
const deleteCarById = (id) => { Car.deleteOne(id) }

module.exports = {
    readCars,
    readCarById,
    createCar,
    readCar,
    updateCarById,
    deleteCarById,
    readFlatCars
}


// Helper function to validate car license number.
const isValidLicense = (str) => {
    const regex = /^\d{2}-\d{3}-\d{2}$/;
    return regex.test(str);
};