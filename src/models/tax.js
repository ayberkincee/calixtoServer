const {DataTypes} = require('sequelize');

const taxmodel = (sequelize) => {
  sequelize.define("tax", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
  );
};
module.exports = taxmodel;
