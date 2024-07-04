const { createCar, readCarById, readCars, readCar, updateCarById, deleteCarById, readFlatCars } = require("../../DL/controllers/car.controller");
const { sortData } = require("../../DL/helpers");
// Create
const createCarService = async (car) => {
    const newCar = await createCar(car);
    if (newCar._id) {
        return newCar;
    }
    throw "Failed to create a new car";
}
// Read
const getAllCarsService = (filter) => readCars(filter)

const getCarsForTable = async(filter) =>{
    const { search, sortKey, sortOrder, currentPage, filters } = filter;
        console.log(search, sortKey, sortOrder, currentPage, filters, "🎖️😒➡️👌👌😫👍📵🤣");
        const itemsPerPage =8;
        const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;
        let mongooseFilter = {
            $or: [
                { carLicense: { $regex: search || "", $options: 'i' } },
                { model: { $regex: search || "", $options: 'i' } }
            ],
            isAvailable: (filters && filters.isAvailable) ? (filters.isAvailable == "true" || filters.isAvailable == "false" ? (filters.isAvailable == "true" ? true : false) : undefined) : undefined
        };
        if (!filters || !filters.isAvailable || (filters.isAvailable != "true" && filters.isAvailable != "false")) {
            delete mongooseFilter.isAvailable;
        }

        let items = await readFlatCars(mongooseFilter)
        // console.log({ items });
        if (items.length > 0) {
            return { items: sortData(items, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count: items.length };
        }
        else return { items: [], count: 0 }
}

const readCarByIdService = (id) => readCarById(id)
const readCarByFieldService = (filter) => readCar(filter)
const getSingleCarService = (carLicense) => readCar({ carLicense })

// Update
const updateCarService = async(id, data) => {
    const updatedCar =  await updateCarById(id, data);
    if (updatedCar._id) {
        return await readCarById(id)
    }
    else return updatedCar
}

// Delete
const deleteCarService = async(id) => deleteCarById(id)
   //  if (!carLicense) throw "carLicense is required";
   //  let car = await getSingleCarService(carLicense)
   //  if (!car) throw "car not found";
    


module.exports = {
    createCarService,
    readCarByIdService,
    readCarByFieldService,
    getSingleCarService,
    getAllCarsService,
    updateCarService,
    deleteCarService, 
    getCarsForTable
}

