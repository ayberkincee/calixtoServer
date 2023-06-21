const { Product } = require("../db.js");

async function updateProducts(req, res) {
  const products = req.body;

  try {
    products.forEach(async (p) => {
    const r = await Product.update(p, { where: { codigo: p.codigo } });
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
