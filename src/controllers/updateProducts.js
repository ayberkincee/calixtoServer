//Updates only the products that exist in database

const { Product, Category } = require("../db.js");

async function updateProducts(req, res) {

  const products = req.body;

  try {
    products.forEach(async (p) => { 
      const prodExist = await Product.findOne({ where: { id: p.id } });
      if (prodExist) {
        console.log("Este existe", prodExist.id);
    
        //creates or updates the category in categories table
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
        
        p.descripcion ? (p.descripcion = p.descripcion.slice(0, 450)) : null;
        const r = await Product.update(p, { where: { id: p.id } });
        
        let newChannels = [];
      
        p.saludable === "SI" && newChannels.push(1);
        p.autoservicio === "SI" && newChannels.push(2);
        p.gym === "SI" && newChannels.push(3);
        p.cafesCow === "SI" && newChannels.push(4);
        p.horeca === "SI" && newChannels.push(5);
        p.licoStores === "SI" && newChannels.push(6);
        p.educacion === "SI" && newChannels.push(7);

        prodExist.setChannels(newChannels);
      }
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
