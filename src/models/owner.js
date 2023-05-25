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
      logoowner: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    { timestamps: false }
  );
};
module.exports = ownermodel;
