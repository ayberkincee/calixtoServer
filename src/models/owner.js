const { DataTypes } = require("sequelize");

const ownermodel = (sequelize) => {
  sequelize.define(
    "owner",
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      logoOwner: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      sloganOwner:{
        type: DataTypes.TEXT,
        allowNull: true
      },
      cardType: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      llegado: {
        type: DataTypes.INTEGER,
        defaultValue: 3
      },
      colorPrimario: { //Barra superior e iconos
        type: DataTypes.STRING,
        defaultValue: "E26C2C"
      },
      colorSecundario: { //background
        type: DataTypes.STRING,
        defaultValue: "B7DDFF"
      },
      colorTerciario: {  //otros
        type: DataTypes.STRING,
        defaultValue: "27457D"
      },

    },
    { timestamps: false }
  );
};
module.exports = ownermodel;
