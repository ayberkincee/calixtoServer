const { DataTypes } = require("sequelize");

const classmodel = (sequelize) => {
  sequelize.define("class", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iconUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
  );
};
module.exports = classmodel;
