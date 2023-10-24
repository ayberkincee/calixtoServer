const {DataTypes} = require("sequelize");

const channelmodel = (sequelize) =>{
    sequelize.define("channel", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: "saludable"
        }
    },
    {timestamps: false}
    )
}
module.exports = channelmodel;