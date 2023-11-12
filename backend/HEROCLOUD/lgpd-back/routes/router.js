import express from "express";
let router = express.Router();
import userController from "./UserController.js";
import sellerController from "./SellerController.js";
import purchaseController from "./PurchaseController.js";
import carController from "./CarController.js";

router.get("/", function (req, res) {
  console.log("open!");
  res.status(200).json({ message: "open!" });
});

router.use("/", userController);
router.use("/", sellerController);
router.use("/", purchaseController);
router.use("/", carController);

export default router;