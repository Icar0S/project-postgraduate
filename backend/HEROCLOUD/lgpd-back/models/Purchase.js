import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Purchase = sequelize.define('purchase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, { underscored: true });

export default Purchase;