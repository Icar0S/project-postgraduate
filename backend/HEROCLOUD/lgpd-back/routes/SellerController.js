import express from "express";
let router = express.Router();
import sellerService from "../services/sellerService.js";

router.post("/addSeller", async function (req, res) {
  const sellerModel = {
    name: req.body.name,
    car_id: req.body.car_id
  }
  const seller = await sellerService.saveTeller(sellerModel);
  return res.status(201).json(seller);
});

router.get("/getAllSellers", async function (req, res) {
  const allSellers = await sellerService.getAllSellers();
  return res.status(200).json(allSellers);
});

router.get("/seller/:id", async function (req, res) {
  const seller = await sellerService.getSellerById(req.params.id);
  return res.status(200).json(seller);
});

router.delete("/deleteSeller/:id", async function (req, res) {
  const seller = await sellerService.deleteTellerById(req.params.id);
  return res.status(200).json(seller);
});

router.put("/updateSeller/:id", async function (req, res) {
  const sellerModel = {
    name: req.body.name,
    car_id: req.body.car_id
  };

  const seller = await sellerService.updateTellerById(req.params.id, sellerModel);
  return res.status(200).json(seller);
});

export default router;