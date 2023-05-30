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
    },
    { timestamp: false }
  );
};
module.exports = portfoliomodel;
