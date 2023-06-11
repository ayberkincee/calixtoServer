const { DataTypes } = require("sequelize");

const statemodel = (sequelize) => {
  sequelize.define("state", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
  );
};
module.exports = statemodel;
