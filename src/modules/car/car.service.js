const CarModel = require("./car.model");
let carService = {};

/**
 * Ceate car
 * @param {Object} carBody
 * @returns {Promise<CarModel>}
 */
carService.createCar = async (carBody) => {
  return await CarModel.create(carBody);
};

/**
 * Get All cars
 * @returns {Promise<CarModel>}
 */
carService.getAllCars = async () => {
  return CarModel.find({});
};

/**
 * Get car By Id
 * @param {ObjectId} id
 * @returns {Promise<CarModel>}
 */
carService.getCarById = async (id) => {
  return CarModel.findById(id);
};

/**
 * Update car By Id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<CarModel>}
 */
carService.updateCarById = async (id, updateBody) => {
  await CarModel.updateOne({ _id: id }, updateBody);
  return "Car Updated";
};

/**
 * Delete car By Id
 * @param {ObjectId} id
 */
carService.deleteCarById = async (id) => {
  await CarModel.deleteOne({ _id: id });
  return "Car Deleted";
};

module.exports = carService;
