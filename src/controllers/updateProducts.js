//Updates only the products that exist in database
const { Product, Category, Channel } = require("../db.js");

async function updateProducts(req, res) {
  const products = req.body;
  try {
    products.map(async (p) => {
      const prodExist = await Product.findOne({
        where: { id: p.id },
        include: {
          model: Channel,
          attributes: ["id", "name"],
        },
      });

      //si el producto existe, lo actualiza:
      if (prodExist) {
        //-----------Category-----------------
        //creates or updates the category in categories table
        const categoryId = Number(p.category?.slice(0, 4));
        const category = p.category?.slice(7);
        if (categoryId) {
          const [cat, created] = await Category.findOrCreate({
            where: { id: categoryId },
            defaults: {
              name: category,
            },
          });
          if (created) {
            //if category is new, link it to the product
            await prodExist.setCategory(cat);
          } else {
            //update category name only if already existed
            await Category.update(
              { name: category },
              { where: { id: categoryId } }
            );
          }
        }

        //---------------Description------------------
        //recorta el texto de la descripcion si es muy extenso:
        p.descripcion && (p.descripcion = p.descripcion.slice(0, 450));

        //----------------Product----------------
        //Updates el producto:
        const r = await Product.update(p, { where: { id: p.id } });

        //-----------------Channels-----------------

        //Elimina o adiciona cualquier canal individual a los canales que ya tenga el 
        //producto.  No modifica los que no se le pasen.
        
        let newChannels = prodExist.channels.map((c) => c.id);
        console.log("====================================");
        console.log("init chnns", newChannels);
        console.log("====================================");
        // let newChannels = [];
        //only if new channels were provided for this product.
        p.saludable?.toLowerCase() === "si" && newChannels.push(1);
        p.saludable?.toLowerCase() === "no" &&
          newChannels.indexOf(1) > -1 &&
          newChannels.splice(newChannels.indexOf(1), 1);
        p.autoservicio?.toLowerCase() === "si" && newChannels.push(2);
        p.autoservicio?.toLowerCase() === "no" &&
          newChannels.indexOf(2) > -1 &&
          newChannels.splice(newChannels.indexOf(2), 1);
        p.gym?.toLowerCase() === "si" && newChannels.push(3);
        p.gym?.toLowerCase() === "no" &&
          newChannels.indexOf(3) > -1 &&
          newChannels.splice(newChannels.indexOf(3), 1);
        p.cafesCow?.toLowerCase() === "si" && newChannels.push(4);
        p.cafesCow?.toLowerCase() === "no" &&
          newChannels.indexOf(4) > -1 &&
          newChannels.splice(newChannels.indexOf(4), 1);
        p.horeca?.toLowerCase() === "si" && newChannels.push(5);
        p.horeca?.toLowerCase() === "no" &&
          newChannels.indexOf(5) > -1 &&
          newChannels.splice(newChannels.indexOf(5), 1);
        p.licoStores?.toLowerCase() === "si" && newChannels.push(6);
        p.licoStores?.toLowerCase() === "no" &&
          newChannels.indexOf(6) > -1 &&
          newChannels.splice(newChannels.indexOf(6), 1);
        p.educacion?.toLowerCase() === "si" && newChannels.push(7);
        p.educacion?.toLowerCase() === "no" &&
          newChannels.indexOf(7) > -1 &&
          newChannels.splice(newChannels.indexOf(7), 1);

        //adiciona los canales al producto:
        prodExist.setChannels([...new Set(newChannels)]);

        console.log("====================================");
        console.log("final chnns", [...new Set(newChannels)]);
        console.log("====================================");

        //----------------Icons------------------------
        //crea el arreglo de iconos del producto:
        let newIcons = [];
        p.keto?.toLowerCase() === "si" && newIcons.push(1);
        p.keto?.toLowerCase() === "no" && newIcons.push(7);
        p.vegano?.toLowerCase() === "si" && newIcons.push(2);
        p.vegano?.toLowerCase() === "no" && newIcons.push(8);
        p.vegetariano?.toLowerCase() === "si" && newIcons.push(3);
        p.vegetariano?.toLowerCase() === "no" && newIcons.push(9);
        p.diabetico?.toLowerCase() === "si" && newIcons.push(4);
        p.diabetico?.toLowerCase() === "no" && newIcons.push(10);
        p.proteina?.toLowerCase() === "si" && newIcons.push(5);
        p.proteina?.toLowerCase() === "no" && newIcons.push(11);
        p.gluten?.toLowerCase() === "si" && newIcons.push(6);
        p.gluten?.toLowerCase() === "no" && newIcons.push(12);

        //adiciona los iconos al producto:
        newIcons.length > 0 && prodExist.setIcons(newIcons);
      }
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = updateProducts;
