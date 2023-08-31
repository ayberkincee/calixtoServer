const { Product } = require("../db.js");

const patchProduct = async (req, res) => {
// console.log("atendido por patchProduct");
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedProduct = Product.update(update, { where: { id: id } });
    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).send("Error while trying to update product");
  }
};

module.exports = patchProduct;