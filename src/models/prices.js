const { DataTypes } = require("sequelize");

const pricemodel = (sequelize) => {
  sequelize.define("price", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    price1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price4: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price5: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price6: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price7: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price8: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price9: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price10: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  { timestamps: false }
  );
};
module.exports = pricemodel;
