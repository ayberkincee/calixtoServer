//Solo crea los productos que no existen previamente en la bd

//imports the models
const { Product, Provider, Category, State, Channel } = require("../db.js");

// const statemodel = require("../models/state.js");

//------------------------------------------------------------
//receives the data sent after Papa parsed it
async function bulkcreate(req, res) {
  // console.log("creating products...");

  try {
    const prd = req.body.resultData;
    const ownerId = req.body.owner;

    //req.body is an array of product objects like the CSV

    for (let i = 0; i < prd.length; i++) {
      const nn = prd[i].nombre;
      
      // console.log(`Checking if the product ${prd[i].id} exist`);
      
      const prodExist = await Product.findOne({
        where: { id: prd[i].id },
      });
      
      // console.log(`existe ${prd[i].id}?`, !!prodExist);
      if (!prodExist) {

        //-----------PROVIDER------------
        // console.log("provider33", prd[i].id );
        await Provider.findOrCreate({
          where: { name: prd[i].provider },
        });
        const provider = await Provider.findOne({
          where: { name: prd[i].provider },
        });

        //--------CATEGORY-----------------
        // console.log("creando categoria");
        const categoryId = Number(prd[i].category.slice(0, 4));
        const category = prd[i].category.slice(7);
        // console.log("categ45", prd[i].id );
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

        const categ = await Category.findOne({
          where: { id: categoryId },
        });

        //------------CREATE PRODUCT--------------
        // console.log("creando producto");
        const product = await Product.create({
          id: prd[i].id,
          nombre: prd[i].nombre,
          codigoBarras: prd[i].codigoBarras,
          embalaje: prd[i].embalaje,
          precioBase: Number(prd[i].precioBase),
          precio2: Number(prd[i].precio2),
          precio3: Number(prd[i].precio3),
          precio4: Number(prd[i].precio4),
          precio5: Number(prd[i].precio5),
          precio6: Number(prd[i].precio6),
          precio7: Number(prd[i].precio7),
          precio8: Number(prd[i].precio8),
          precio9: Number(prd[i].precio9),
          precio10: Number(prd[i].precio10),
          prodUrl: prd[i].prodUrl,
          descripcion: prd[i].descripcion.slice(0, 450),
          existencia: prd[i].existencia,
          rotacion: prd[i].rotacion,
          agotado: prd[i].agotado,
          limitado: prd[i].limitado,
          tax: prd[i].tax
        });
        // console.log(`producto creado ${prd[i].nombre}`);

        let estado = "disponible";

        if (100 * (prd[i].existencia / prd[i].rotacion) <= prd[i].limitado) {
          estado = "limitado";
        }
        if (100 * (prd[i].existencia / prd[i].rotacion) <= prd[i].agotado) {
          estado = "agotado";
        }

        //--------------RELACIONES----------------
        // console.log("creando relacion estados");
        // console.log("estado100", prd[i].id );
        const stateId = await State.findOne({ where: { name: estado } });
        await product.setState(stateId);
        // console.log("creando relacion taxes");
        // await product.setTax(tax);
        // console.log("creando relacion proveedores");
        await product.setProvider(provider);
        // console.log("creando relacion categorias");
        await product.setCategory(categ);
        // console.log("creando relacion owners");
        await product.setOwner(ownerId);

        // console.log("creando iconos")
        prd[i].keto === "SI" ? product.addIcon(1) : product.addIcon(7);
        prd[i].vegano === "SI" ? product.addIcon(2) : product.addIcon(8);
        prd[i].vegetariano === "SI" ? product.addIcon(3) : product.addIcon(9);
        prd[i].diabetico === "SI" ? product.addIcon(4) : product.addIcon(10);
        prd[i].proteina === "SI" ? product.addIcon(5) : product.addIcon(11);
        prd[i].gluten === "SI" ? product.addIcon(6) : product.addIcon(12);

        // console.log("creando canales")
        prd[i].saludable === "SI" && product.addChannel(1);
        prd[i].autoservicio === "SI" && product.addChannel(2);
        prd[i].gym === "SI" && product.addChannel(3);
        prd[i].cafesCow === "SI" && product.addChannel(4);
        prd[i].horeca === "SI" && product.addChannel(5);
        prd[i].licoStores === "SI" && product.addChannel(6);
        prd[i].educacion === "SI" && product.addChannel(7);

        const portfolios = prd[i].portfolios.split("|");
        portfolios.map((p) => {
          product.addPortfolio(p);
        });
      }
    }
    res.status(200).send("carga completa");
  } catch (error) {
    console.log("bulkcreate error: ",error.message);
    res.status(500).json({ error: error.message });
  }
}
module.exports = bulkcreate;
