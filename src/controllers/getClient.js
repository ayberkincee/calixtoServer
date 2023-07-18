const {Client} = require("../db")

async function getClient (req,res) {
    const {clientId} = req.params;
    const client = await Client.findByPk(clientId);
    res.status(200).json(client)
}
module.exports=getClient;