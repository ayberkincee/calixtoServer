const {DataTypes} = require('sequelize');

const taxmodel = (sequelize) => {
  sequelize.define("tax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    iva: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
module.exports = taxmodel;
