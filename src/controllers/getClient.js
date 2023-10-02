const { Client } = require("../db");

async function getClient(req, res) {
  try {
    const { clientId } = req.params;
    const client = await Client.findByPk(clientId);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = getClient;
