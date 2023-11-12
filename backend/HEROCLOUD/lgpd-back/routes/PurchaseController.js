import express from "express";
import purchaseService from "../services/PurchaseService.js";

let router = express.Router();

router.post("/addPurchase", function (req, res) {
  const purchaseModel = {
    user_id: req.body.user_id,
    car_id: req.body.car_id,
    value: req.body.value,
    date: req.body.date
  }
  const purchase = purchaseService.savePurchase(purchaseModel);
  return res.status(201).json(purchase);
});

router.get("/getAllPurchases", async function (req, res) {
  const allPurchases = await purchaseService.getAllPurchases();
  return res.status(200).json(allPurchases);
});

router.get("/purchase/:id", async function (req, res) {
  const purchase = await purchaseService.getPurchaseById(req.params.id);
  return res.status(200).json(purchase);
});

router.delete("/deletePurchase/:id", async function (req, res) {
  const purchase = await purchaseService.deletePurchaseById(req.params.id);
  return res.status(200).json(purchase);
});

router.put("/updatePurchase/:id", async function (req, res) {
  const purchaseModel = {
    user_id: req.body.user_id,
    car_id: req.body.car_id,
    value: req.body.value,
    date: req.body.date
  };

  const purchase = await purchaseService.updatePurchaseById(req.params.id, purchaseModel);
  return res.status(200).json(purchase);
});

export default router;