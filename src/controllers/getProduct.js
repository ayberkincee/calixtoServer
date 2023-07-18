const { Product } = require("../db");

async function getProduct(req, res) {
  const { productCodigo } = req.params;
  const prod = await Product.findByPk(productCodigo);
  res.status(200).json(prod);
}
module.exports = getProduct;
