//Updates only the products that exist in database

const { Product } = require("../db.js");

async function updateProducts(req, res) {
  const products = req.body;

  try {
    products.forEach(async (p) => {
      const prodExist = Product.findOne({ where: { id: p.id } });
      if (prodExist) {
        p.descripcion ? (p.descripcion = p.descripcion.slice(0, 500)) : null;
        const r = await Product.update(p, { where: { id: p.id } });
      }
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
