import Seller from "../models/Seller.js";

const saveSeller = async (sellerModel) => {
  const save = await Seller.create(sellerModel);
  return save;
}

const getAllSellers = async () => {
  return await Seller.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getSellerById = async (id) => {
  return await Seller.findByPk(id);
};

const deleteSellerById = async (id) => {
  return await Seller.destroy({ where: { id: id } });
};

const updateSellerById = async (id, SellerModel) => {
  try {
    const result = await Seller.update(SellerModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Seller updated with success" };
    } else {
      return { message: `Can't find Seller ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
  saveSeller,
  getAllSellers,
  getSellerById,
  deleteSellerById,
  updateSellerById
};

export default factory;