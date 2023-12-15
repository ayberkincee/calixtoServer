const { DataTypes } = require("sequelize");

// Profiles: 1:Vendedor, 2:Embajador, 3:Cliente

const usermodel = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.DOUBLE,
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
      profile: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      priceList: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
module.exports = usermodel;
