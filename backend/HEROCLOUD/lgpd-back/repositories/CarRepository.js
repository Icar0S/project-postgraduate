import Car from "../models/Car.js";

const saveCar = async (carModel) => {
  const save = await Car.create(carModel);
  return save;
}

const getAllCars = async () => {
  return await Car.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getCarById = async (id) => {
  return await Car.findByPk(id);
};

const deleteCarById = async (id) => {
  return await Car.destroy({ where: { id: id } });
};

const updateCarById = async (id, CarModel) => {
  try {
    const result = await Car.update(CarModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Car updated with success" };
    } else {
      return { message: `Can't find Car ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};


const factory = {
  saveCar,
  getAllCars,
  getCarById,
  deleteCarById,
  updateCarById
};

export default factory;