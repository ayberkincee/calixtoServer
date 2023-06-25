const { DataTypes } = require("sequelize");

const portfoliomodel = (sequelize) => {
  sequelize.define(
    "portfolio",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priority: {
        type: DataTypes.INTEGER,
        defaultValue: 10
      }
    },
    { timestamp: false }
  );
};
module.exports = portfoliomodel;
