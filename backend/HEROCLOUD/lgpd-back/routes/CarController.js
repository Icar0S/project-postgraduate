import express from "express";
import carService from "../services/CarService.js";

let router = express.Router();

router.post("/addCar", function (req, res) {
  const carModel = {
    name: req.body.name,
    old: req.body.old
  }
  const car = carService.saveCar(carModel);
  return res.status(201).json(car);
});

router.get("/getAllCars", async function (req, res) {
  const allCars = await carService.getAllCars();
  return res.status(200).json(allCars);
});

router.get("/car/:id", async function (req, res) {
  const car = await carService.getCarById(req.params.id);
  return res.status(200).json(car);
});

router.delete("/deleteCar/:id", async function (req, res) {
  const car = await carService.deleteCarById(req.params.id);
  return res.status(200).json(car);
});

router.put("/updateCar/:id", async function (req, res) {
  const carModel = {
    name: req.body.name,
  };

  const car = await carService.updateCarById(req.params.id, carModel);
  return res.status(200).json(car);
});


export default router;