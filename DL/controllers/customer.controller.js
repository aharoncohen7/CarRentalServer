
const Customer = require("../models/customer.model")
//create
const createCustomer = async (data) => Customer.create(data)
//Read
async function readCustomers(filter, isPopulate = true) {
    console.log(filter);
    let query = Customer.find(filter);
    if (isPopulate) {
        query = query.populate({
            path: 'rentalHistory',
            populate: {
                path: 'customerId',
                select: 'name email phone'
            }
        });
    }
    const customers = await query.exec();
    return customers;
}


async function readFlatCustomers(filter) {
    // Define the fields to include (only flat fields)
    const fieldsToSelect = '_id name email phone driverLicense registeredAt';
    // Query the database with the filter and select only the flat fields
    const customers = await Customer.find(filter).select(fieldsToSelect);
    return customers;
}
const readCustomerById = (id) => Customer.findById({ _id: id })
const readCustomer = (filter) => Customer.findOne(filter)
//Update
const updateCustomerById = async (id, data) => {
    if (data.driverLicense) {
        // Check if the driverLicense already exists
        const existingCustomer = await Customer.findOne({ driverLicense: data.driverLicense })
        if (existingCustomer) {
            throw (`driverLicense mast be unique filed, and Customer with driverLicense: ${data.driverLicense} already exists`)
        }
    }
    const updatedCustomer = await Customer.findByIdAndUpdate(id, data)
    if (updatedCustomer) {
        return await readCustomerById(id)
    }
    return await Customer.findByIdAndUpdate(id, data)
}
//Delete
const deleteCustomerById = (id) => Customer.deleteOne({ _id: id })

module.exports = {
    readCustomers,
    readCustomerById,
    createCustomer,
    readCustomer,
    updateCustomerById,
    deleteCustomerById,
    readFlatCustomers
}



// async function readCustomers(filter, isPopulate = true) {
//     const customers = await Customer.find(filter).populate(
//         isPopulate ? ['rentalHistory', { path: 'rental.carId', }] : null);
//     if (isPopulate) {
//         for (let rental of rentals) {
//             rental.rentalId = await Customer.findById(rental.customerId).select('name email phone');
//         }
//     }
//     return customers;
// }