const {Client} = require("../db")

async function getClient (req,res) {
    const {id} = req.params;
    console.log("id", id);
    const client = await Client.findByPk(id)
    console.log("client", client);
    res.status(200).json(client)
}
module.exports=getClient;