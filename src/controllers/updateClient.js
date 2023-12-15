const {Client} = require("../db")

async function updateClient(req, res) {
  const cliente = req.body;
  await Client.update(cliente, {
    where: { id: cliente.id },
  });
  res.status(200).send("actualizacion OK");
}
module.exports = updateClient;
