import Purchase from "../models/Purchase.js";

const savePurchase = async (purchaseModel) => {
  const save = await Purchase.create(purchaseModel);
  return save;
}

const getAllPurchases = async () => {
  return await Purchase.findAll({
    order: [
      ['id', 'ASC']
    ]
  });
};

const getPurchaseById = async (id) => {
  return await Purchase.findByPk(id);
};

const deletePurchaseById = async (id) => {
  return await Purchase.destroy({ where: { id: id } });
};

const updatePurchaseById = async (id, PurchaseModel) => {
  try {
    const result = await Purchase.update(PurchaseModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Purchase updated with success" };
    } else {
      return { message: `Can't find Purchase ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};

const factory = {
  savePurchase,
  getAllPurchases,
  getPurchaseById,
  deletePurchaseById,
  updatePurchaseById
};

export default factory;