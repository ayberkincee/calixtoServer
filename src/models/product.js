const { DataTypes } = require("sequelize");

const productmodel = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      tax: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      prodUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      existencia: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      rotacion: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      agotado: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
      },
      limitado: {
        type: DataTypes.INTEGER,
        defaultValue: 15,
      },
      precioBase: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      precio2: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio3: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio4: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio5: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio6: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio7: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio8: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio9: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      precio10: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
module.exports = productmodel;
