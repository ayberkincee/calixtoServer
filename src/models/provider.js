const {DataTypes} = require('sequelize');

const providermodel = (sequelize) => {
  sequelize.define("provider", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = providermodel;
