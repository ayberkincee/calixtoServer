const {DataTypes} = require('sequelize');

const providermodel = (sequelize) => {
  sequelize.define("provider", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
