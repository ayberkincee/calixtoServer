const {DataTypes} = require('sequelize');

const providermodel = (sequelize) => {
  sequelize.define("provider", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
  );
};
module.exports = providermodel;
