
const Rental = require("../models/rental.model")
//Create
const createRental = async (data) => Rental.create(data)
//Read
async function readRentals(filter, isPopulate = true) {
    let query =  Rental.find(filter);
    if (isPopulate) {
        query = query.populate('customerId').populate('carId');
    }
    const rentals = await query.exec();
    return rentals;
}
const rentalFieldsToSelect = '_id customerId carId notes status isPaid quantity totalPrice orderDate';
async function readFlatRentals(filter) {

    // Define the fields to include (only flat fields)
    const fieldsToSelect = '_id customerId carId notes status isPaid quantity totalPrice orderDate';
    // Query the database with the filter and select only the flat fields
    const rentals = await Rental.find(filter).select(fieldsToSelect);
    console.log("🎖️🎖️🎖️🎖️🎖️🎖️🎖️🎖️🎖️🎖️", rentals[0])

    return rentals;
}
const readRentalById = (id) => Rental.findById({ _id: id })
const readRental = (filter) => Rental.findOne(filter)
//Update
const updateRentalById = async (id, data) => {
    const updatedRental = await Rental.findByIdAndUpdate(id, data)
    if (updatedRental) {
        return await readRentalById(id)
    }
}
//Delete
const deleteRentalById = (id) => Rental.deleteOne({ _id: id })

module.exports = {
    readRentals,
    readRentalById,
    createRental,
    readRental,
    updateRentalById,
    deleteRentalById,
    readFlatRentals
}
