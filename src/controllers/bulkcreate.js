//Solo crea los productos que no existen previamente en la bd

//imports the models
const { Product, Provider, Tax, Category, State } = require("../db.js");

// const statemodel = require("../models/state.js");

//------------------------------------------------------------
//receives the data sent after Papa parsed it
async function bulkcreate(req, res) {
  try {
    const prd = req.body.resultData;
    const ownerId = req.body.owner;
    //req.body is an array of product objects like the CSV

    // for (let i = 0; i < prd.length; i++) {
    //   const nn = prd[i].nombre;

    const prodExist = await Product.findOne({
      where: { id: prd[i].id },
    });

    // console.log(`existe? ${nn}`, !!prodExist);

    if (!prodExist) {
      // console.log(`creando producto ${nn}`);
      // Create product
      const tax = await Tax.findOne({
        where: { tax: prd[i].tax },
      });

      // console.log("found tax ", tax );

      // console.log("creando el proveedor ahora...");
      await Provider.findOrCreate({
        where: { name: prd[i].provider },
      });
      const provider = await Provider.findOne({
        where: { name: prd[i].provider },
      });

      // console.log("found provider ", provider);

      const categoryId = Number(prd[i].category.slice(0, 4));
      const category = prd[i].category.slice(7);

      await Category.findOrCreate({
        where: { id: categoryId },
        defaults: {
          name: category,
        },
      });

      //========AQUI ACTUALIZAR EL NOMBRE DE LA CATEGORIA==========
      await Category.update({ name: category },
        {where:{id: categoryId}}
        );

      // await User.update({ lastName: "Doe" }, {
      //   where: {
      //     lastName: null
      //   }
      // });

      const categ = await Category.findOne({
        where: { id: categoryId },
      });

      const product = await Product.create({
        id: prd[i].id,
        nombre: prd[i].nombre,
        codigoBarras: prd[i].codigoBarras,
        embalaje: prd[i].embalaje,
        precioBase: prd[i].precioBase,
        prodUrl: prd[i].prodUrl,
        descripcion: prd[i].descripcion.slice(0, 450),
        existencia: prd[i].existencia,
        rotacion: prd[i].rotacion,
        agotado: prd[i].agotado,
        limitado: prd[i].limitado,
      });
      console.log(`producto creado ${prd[i].nombre}`);

      let estado = "disponible";

      if (100 * (prd[i].existencia / prd[i].rotacion) <= prd[i].limitado) {
        estado = "limitado";
      }
      if (100 * (prd[i].existencia / prd[i].rotacion) <= prd[i].agotado) {
        estado = "agotado";
      }

      const stateId = await State.findOne({ where: { name: estado } });
      await product.setState(stateId);

      await product.setTax(tax);
      await product.setProvider(provider);
      await product.setCategory(categ);

      await product.setOwner(ownerId);
      prd[i].keto === "SI" ? product.addIcon(1) : product.addIcon(7);
      prd[i].vegano === "SI" ? product.addIcon(2) : product.addIcon(8);
      prd[i].vegetariano === "SI" ? product.addIcon(3) : product.addIcon(9);
      prd[i].diabetico === "SI" ? product.addIcon(4) : product.addIcon(10);
      prd[i].proteina === "SI" ? product.addIcon(5) : product.addIcon(11);
      prd[i].gluten === "SI" ? product.addIcon(6) : product.addIcon(12);
      const portfolios = prd[i].portfolios.split("|");
      portfolios.map((p) => {
        product.addPortfolio(p);
      });
    }

    res.status(200).send("carga completa");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = bulkcreate;
