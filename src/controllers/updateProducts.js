//Updates only the products that exist in database

const { Product, Category } = require("../db.js");

async function updateProducts(req, res) {

  const products = req.body;

  try {
    products.forEach(async (p) => {
      const prodExist = await Product.findOne({ where: { id: p.id } });
      if (prodExist) {
        //console.log(`existe ${p.id}`);
         p.descripcion ? (p.descripcion = p.descripcion.slice(0, 450)) : null;
        
        const r = await Product.update(p, { where: { id: p.id } });

        const categoryId = Number(p.category?.slice(0, 4));
        // console.log("categoryId",categoryId);
        const category = p.category?.slice(7);
        // console.log(`${categoryId}: ${category}`);
        if (categoryId) {
          await Category.findOrCreate({
            where: { id: categoryId },
            defaults: {
              name: category,
            },
          });
          await Category.update(
            { name: category },
            { where: { id: categoryId } }
          );
        }
      }
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
