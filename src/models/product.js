const {DataTypes} = require('sequelize');

const productmodel = (sequelize) => {
  sequelize.define("product", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_barras: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    embalaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_base: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    precio_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    precio_base_caja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    precio_total_caja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    prodImg: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
module.exports = productmodel;
