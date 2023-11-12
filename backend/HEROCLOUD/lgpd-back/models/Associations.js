import User from "./User.js";
import Car from "./Car.js";
import Seller from "./Seller.js";
import Purchase from "./Purchase.js";

const associations = () => {
  Car.hasMany(Seller);
  User.hasMany(Purchase);
  Car.hasOne(Purchase);
}

const factory = {
  associations
}

export default factory;