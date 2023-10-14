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
            defaultValue: "NONE"
        }
    },
    {timestamps: false}
    )
}
module.exports = channelmodel;