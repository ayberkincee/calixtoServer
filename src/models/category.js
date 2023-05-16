const { DataTypes } = require("sequelize");

const categorymodel = (sequelize) => {
    sequelize.define("category", {
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
    )

}
module.exports = categorymodel;