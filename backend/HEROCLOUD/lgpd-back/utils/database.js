import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'lgpd-database',
  'postgres',
  '123456',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    define: {
      timestamps: false
    }
  }
);

export default sequelize;