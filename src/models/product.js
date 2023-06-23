const { DataTypes } = require("sequelize");

const productmodel = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigoBarras: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      embalaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precioBase: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      prodUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
module.exports = productmodel;
