import sellerRepository from "../repositories/SellerRepository.js";

const saveSeller = (sellerModel) => {
  return sellerRepository.saveSeller(sellerModel);
}

const getSellerById = (id) => {
  return sellerRepository.getSellerById(id);
}

const getAllSellers = () => {
  return sellerRepository.getAllSellers();
}

const deleteSellerById = (id) => {
  return sellerRepository.deleteSellerById(id);
}

const updateSellerById = (id, sellerModel) => {
  return sellerRepository.updateSellerById(id, sellerModel);
}

const service = {
  saveSeller,
  getSellerById,
  getAllSellers,
  deleteSellerById,
  updateSellerById
}


export default service;