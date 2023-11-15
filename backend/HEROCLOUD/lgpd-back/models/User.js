import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  profile_picture: DataTypes.STRING,

}, { underscored: true });

export default User;