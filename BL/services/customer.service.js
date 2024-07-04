const { createCustomer, readCustomerById, readCustomers, readCustomer, updateCustomerById, deleteCustomerById, readFlatCustomers } = require("../../DL/controllers/customer.controller");
const { sortData } = require("../../DL/helpers");

// Create
const createCustomerService = async (customer) => {
    if (!customer.name ) {
        throw "name is required";
    }
    if (!customer.driverLicense) {
        throw "driver License is required";
    }
    if ( !customer.email ) {
        throw "email is required";
    }
    if ( !customer.phone) {
        throw "phone is required";
    }
    let oldCustomer = await getSingleCustomerService(customer.driverLicense)
    console.log(customer.driverLicense, "❤️❤️❤️❤️❤️❤️❤️❤️❤️");
    if (oldCustomer) throw "customer is exist";
    customer.password = (Math.floor(Math.random() * 100 * 100));
    const newCustomer = await createCustomer(customer);
    if (newCustomer._id) {
        return newCustomer;
    }
    throw "Failed to create a new customer";
}
// Read
const getAllCustomersService = (filter) => readCustomers(filter)

const getCustomersForTable = async(filter) =>{
    const { search, sortKey, sortOrder, currentPage, filters } = filter;
        console.log(search, sortKey, sortOrder, currentPage, filters, "🎖️😒➡️👌👌😫👍📵🤣");
        const itemsPerPage =8;
        const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;
        let mongooseFilter = {
            $or: [
                { name: { $regex: search || "", $options: 'i' } },
                { email: { $regex: search || "", $options: 'i' } }
            ],
            isActive: (filters && filters.isActive) ? (filters.isActive == "true" || filters.isActive == "false" ? (filters.isActive == "true" ? true : false) : undefined) : undefined
        };
        if (!filters || !filters.isActive || (filters.isActive != "true" && filters.isActive != "false")) {
            delete mongooseFilter.isActive;
        }

        let items = await readFlatCustomers(mongooseFilter)
        console.log({ items });
        if (items.length > 0) {
            return { items: sortData(items, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count: items.length };
        }
        else return { items: [], count: 0 }
}





const readCustomerByIdService = (id) => readCustomerById(id)
const readCustomerByFieldService = (filter) => readCustomer(filter)
const getSingleCustomerService = (driverLicense) => readCustomer({ driverLicense })

// Update
const updateCustomerService = async(id, data) => {
    // if (!driverLicense) throw "driverLicense is required";
    // let customer = await getSingleCustomerService(driverLicense)
    // if (!customer) throw "customer not found";
    return await updateCustomerById(id, data)
}
// Delete
const deleteCustomerService = async(id) => deleteCustomerById(id)

// const deleteCustomerService = async(id) => {
//     // if (!driverLicense) throw "driverLicense is required";
//     // let customer = await getSingleCustomerService(driverLicense)
//     // if (!customer) throw "customer not found";
//     return await deleteCustomerById(id)
// }

module.exports = {
    createCustomerService,
    readCustomerByIdService,
    readCustomerByFieldService,
    getSingleCustomerService,
    getAllCustomersService,
    updateCustomerService,
    deleteCustomerService,
    getCustomersForTable
}

