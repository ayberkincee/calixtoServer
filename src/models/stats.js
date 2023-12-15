const { DataTypes } = require("sequelize");

const statsmodel = (sequelize) => {
  sequelize.define("stats", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    action: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detailName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
module.exports = statsmodel;
