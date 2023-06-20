const {
  Product,
  Provider,
  Tax,
  Category,
  Owner,
  State,
  Icon,
  User,
  Portfolio,
} = require("../db.js");

async function updateProducts(req, res) {
  // try {
  const products = req.body;
  console.log(products);

  products.map(async (p, i) => {
    await Product.update(p, { where: { codigo: p.codigo } });
  });
  res.status(200).send("cargue de DB OK");

  //   } catch (err) {
  // res.status(400).json({ error: err.message });
}
// };
module.exports = updateProducts;
