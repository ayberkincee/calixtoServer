//Updates only the products that exist in database

const { Product, Category } = require("../db.js");

async function updateProducts(req, res) {

  const products = req.body;

  try {
    products.forEach(async (p) => { 
      const prodExist = await Product.findOne({ where: { id: p.id } });
      
      //si el producto existe, lo actualiza:
      if (prodExist) {
        //creates or updates the category in categories table
        const categoryId = Number(p.category?.slice(0, 4));
        const category = p.category?.slice(7);
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
        
        //recorta el texto de la descripcion si es muy extenso:
        p.descripcion ? (p.descripcion = p.descripcion.slice(0, 450)) : null;

        //Updates el producto:
        const r = await Product.update(p, { where: { id: p.id } });
        
        //Crea el arreglo de canales de este producto:
        let newChannels = [];
        p.saludable === "SI" && newChannels.push(1);
        p.autoservicio === "SI" && newChannels.push(2);
        p.gym === "SI" && newChannels.push(3);
        p.cafesCow === "SI" && newChannels.push(4);
        p.horeca === "SI" && newChannels.push(5);
        p.licoStores === "SI" && newChannels.push(6);
        p.educacion === "SI" && newChannels.push(7);
        //adiciona los canales al producto:
        prodExist.setChannels(newChannels);

        //crea el arreglo de iconos del producto:
        let newIcons = [];
        p.keto === "SI" ? newIcons.push(1) : newIcons.push(7);
        p.vegano === "SI" ? newIcons.push(2) : newIcons.push(8);
        p.vegetariano === "SI" ? newIcons.push(3) : newIcons.push(9);
        p.diabetico === "SI" ? newIcons.push(4) : newIcons.push(10);
        p.proteina === "SI" ? newIcons.push(5) : newIcons.push(11);
        p.gluten === "SI" ? newIcons.push(6) : newIcons.push(12);
        //adiciona los iconos al producto:
        prodExist.setIcons(newIcons);

      }
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
