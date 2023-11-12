import purchaseRepository from "../repositories/PurchaseRepository.js";

const savePurchase = (PurchaseModel) => {
  return purchaseRepository.savePurchase(purchaseModel);
}

const getPurchaseById = (id) => {
  return purchaseRepository.getPurchaseById(id);
}

const getAllPurchases = () => {
  return purchaseRepository.getAllPurchases();
}

const deletePurchaseById = (id) => {
  return purchaseRepository.deletePurchaseById(id);
}

const updatePurchaseById = (id, purchaseModel) => {
  return purchaseRepository.updatePurchaseById(id, purchaseModel);
}

const service = {
  savePurchase,
  getPurchaseById,
  getAllPurchases,
  deletePurchaseById,
  updatePurchaseById
}


export default service;