import carRepository from "../repositories/CarRepository.js";

const saveCar = (carModel) => {
  return carRepository.saveCar(carModel);
}

const getCarById = (id) => {
  return carRepository.getCarById(id);
}

const getAllCars = () => {
  return carRepository.getAllCars();
}

const deleteCarById = (id) => {
  return carRepository.deleteCarById(id);
}

const updateCarById = (id, carModel) => {
  return carRepository.updateCarById(id, carModel);
}

const service = {
  saveCar,
  getCarById,
  getAllCars,
  deleteCarById,
  updateCarById
}


export default service;