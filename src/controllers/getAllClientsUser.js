const {Client} = require('../db')

async function getAllClientsUser (req, res) {
    const {uId} = req.params;
    // console.log("uid",uId);
    const clients = await Client.findAll({where: {userId: uId }});
    // console.log("cli",clients);
    res.status(200).json(clients)
} 
module.exports = getAllClientsUser;