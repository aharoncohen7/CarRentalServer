const { createRental, readRentalById, readRentals, readRental, updateRentalById, deleteRentalById, readFlatRentals } = require("../../DL/controllers/rental.controller");
const { readCarById } = require("../../DL/controllers/car.controller");
const { getSingleCustomerService } = require("../../BL/services/customer.service");
const { sortData } = require("../../DL/helpers");
const { readFlatCustomers } = require("../../DL/controllers/customer.controller");


// Create
const createRentalService = async (rentalData) => {
    if (!rentalData.carId) {
        throw "carId is required";
    }
    if (!rentalData.driverLicense) {
        throw "driver License is required";
    }
    if (!rentalData.from) {
        throw "from is required";
    }
    if (!rentalData.to) {
        throw "to is required";
    }
    if (rentalData.to < rentalData.from) {
        throw "Invalid date range, 'to' should be later than 'from'";
    }
    rentalData.quantity = calculateDaysBetweenDates(rentalData.from, rentalData.to)
    const requestedCar = await readCarById(rentalData.carId);
    if (!requestedCar || !requestedCar.isAvailable) {
        throw "The car not available--‼️‼️‼️‼️‼️‼️ "
    }
    const requestedCustomer = await getSingleCustomerService(rentalData.driverLicense);
    if (!requestedCustomer) {
        throw "Customer not found, go to registration first."
    }
    rentalData.customerId=requestedCustomer._id;
    const newRental = await createRental(rentalData);
    console.log(newRental)
    if (newRental._id) {
        requestedCar.isAvailable = false;
        await requestedCar.save();
        requestedCustomer.rentalHistory.push(newRental._id);  
        await requestedCustomer.save();
        return newRental;
    }
    throw "Failed to create a new rental";
}

// Read
const getAllRentalsService = async(filter) => {

    const rentals = await readRentals(filter)
    // console.log("🚀 ~ getAllRentalsService ~ rentals:📵📵📵📵📵📵📵📵📵📵", rentals[0])
    
    return rentals
}


const getRentalSForTable = async(filter) =>{
    const { search, sortKey, sortOrder, currentPage, filters } = filter;
        console.log(search, sortKey, sortOrder, currentPage, filters, "🎖️😒➡️👌👌😫👍📵🤣");
        const itemsPerPage =8;
        const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;
        let mongooseFilter = {
            $or: [
                { id: { $regex: search || "", $options: 'i' } },
                { notes: { $regex: search || "", $options: 'i' } }
            ],
            isPaid: (filters && filters.isPaid) ? (filters.isPaid == "true" || filters.isPaid == "false" ? (filters.isPaid == "true" ? true : false) : undefined) : undefined
        };
        if (!filters || !filters.isPaid || (filters.isPaid != "true" && filters.isPaid != "false")) {
            delete mongooseFilter.isPaid;
        }

        let items = await readFlatRentals(mongooseFilter)
        console.log("{ items😫😫😫😫😫😫😫😫😫😫😫😫😫😫😫😫😫 }");
        if (items.length > 0) {
            return { items: sortData(items, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count: items.length };
        }
        else return { items: [], count: 0 }
}





const readRentalByIdService = (id) => readRentalById(id)
const readRentalByFieldService = (filter) => readRental(filter)
const getSingleRentalService = (id) => readRental({ _id: id })

// Update
const updateRentalService = async (id, data) => {
    if (!id) throw "id is required";
    if(data.status && data.status!='open'&& data.status!='closed') throw "This is not a valid value for the status"
    let rental = await getSingleRentalService(id)
    if (!rental) throw "rental not found";
    return await updateRentalById(rental._id, data)
}
// Delete
const deleteRentalService = async (id) => deleteRentalById(id)
    

module.exports = {
    createRentalService,
    readRentalByIdService,
    readRentalByFieldService,
    getSingleRentalService,
    getAllRentalsService,
    updateRentalService,
    deleteRentalService,
    getRentalSForTable
}



function calculateDaysBetweenDates(startDate, endDate) {
    // Parse the dates
    const d1 = new Date(startDate);
    const d2 = new Date(endDate);

    // Calculate the difference in time
    const timeDifference = Math.abs(d2 - d1);

    // Convert time difference from milliseconds to days
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Include end date
    return dayDifference;
}

