const { DataTypes } = require("sequelize");

const brandmodel = (sequelize) => {
  sequelize.define("brand", {
    nit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logoImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = brandmodel;
