const {DataTypes} = require("sequelize");

const sellsmodel = (sequelize) => {
    sequelize.define("sell",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },
        productCodigo: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false
        },
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pending: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    )
}
module.exports = sellsmodel;