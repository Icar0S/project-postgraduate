import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Car = sequelize.define('car', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  old: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, { underscored: true });

export default Car;