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
      }
    },
    { timestamps: false }
  );
};
module.exports = ownermodel;
