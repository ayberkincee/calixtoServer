const { Sells } = require("../db");

async function closeSells(req, res) {
  const { userId } = req.body;
  Sells.update({ pending: false }, { where: { userId: userId } });
  res.status(200).send("all closed");
}
module.exports = closeSells;
