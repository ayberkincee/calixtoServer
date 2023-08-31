//Solo crea los productos que no existen previamente en la bd

//imports the models
const { Product, Provider, Tax, Category, State } = require("../db.js");

// const statemodel = require("../models/state.js"); 

//------------------------------------------------------------
//receives the data sent after Papa parsed it
async function bulkcreate(req, res) {
  const prd = req.body.resultData;
  const ownerId = req.body.owner;
  //req.body is an array of product objects like the CSV

  for (let i = 0; i < prd.length; i++) {
    const prodExist = await Product.findOne({
      where: { id: prd[i].id },
    });
    
    // console.log("existe?",prodExist);
    
    if (!prodExist) {
      // console.log("creando producto ",prd[i]);
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
      
      //const categoryId = prd[i].categoryId;
      await Category.findOrCreate({
        where: { name: prd[i].category },
        defaults: {
          id: prd[i].categoryId,
        },
      });

      const categ = await Category.findOne({
        where: { id: prd[i].categoryId },
      });

      // console.log("found Categ ", categ);
      
      // console.log("creando el producto ahora...");
      const product = await Product.create({
        id: prd[i].id,
        nombre: prd[i].nombre,
        codigoBarras: prd[i].codigoBarras,
        embalaje: prd[i].embalaje,
        precioBase: prd[i].precioBase,
        prodUrl: prd[i].prodUrl,
        descripcion: prd[i].descripcion.slice(0, 500),
        existencia: prd[i].existencia,
        rotacion: prd[i].rotacion,
        agotado: prd[i].agotado,
        limitado: prd[i].limitado
      });

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
  }
  res.status(200).send("carga completa");
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
}
module.exports = bulkcreate;
