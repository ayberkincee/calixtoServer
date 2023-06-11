const { DataTypes } = require("sequelize");

const iconmodel = (sequelize) => {
  sequelize.define("icon", {
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
module.exports = iconmodel;
