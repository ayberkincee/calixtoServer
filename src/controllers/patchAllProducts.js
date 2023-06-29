const { Product } = require("../db");

async function patchAllProducts(req, res) {
  const update = req.body;
  const { ownerId } = req.body;

  const prodsIds = await Product.findAll(
    { where: { ownerId: ownerId } },
    {
      attributes: ["id"],
    }
  );

  for (i = 0; i < prodsIds.length; i++) {
    await Product.update(update, { where: { id: prodsIds[i].id } });
  }

  res.status(200).send("updated all products");
}
module.exports = patchAllProducts;
