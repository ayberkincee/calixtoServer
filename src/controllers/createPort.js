const { Portfolio } = require("../db");

async function createPort(req, res) {
  const newPort = req.body;
  const id = newPort.id;
  const name = newPort.name;
  try {
    const portfolios = await Portfolio.create({
      id: id,
      name: name,
    });
    res.status(200).json(portfolios);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
module.exports = createPort;
