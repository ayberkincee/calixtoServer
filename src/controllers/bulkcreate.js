//Solo crea los productos que no existen previamente en la bd


//imports the models
const {
  Product,
  Provider,
  Tax,
  Category,
} = require("../db.js");

//------------------------------------------------------------
//receives the data sent after Papa parsed it
async function bulkcreate(req, res) {

    const prd = req.body.resultData;
    const ownerId = req.body.owner
    //req.body is an array of product objects like the CSV

    for (let i = 0; i < prd.length; i++) {
      // req.body.map(async (prd) => {
      const prodExist = await Product.findOne({
        where: { id: prd[i].id },
      });
      if (!prodExist) {
        // Create product
        const tax = await Tax.findOne({
          where: { tax: prd[i].tax },
        });
        // console.log("creando el proveedor ahora...");
        await Provider.findOrCreate({
          where: { name: prd[i].provider },
          // defaults: {
          //   name: prd[i].provider
          // }
        });
        const provider = await Provider.findOne({
          where: { name: prd[i].provider },
        });
        // console.log("provider");
        // console.log(provider.id);
        const categoryId = await Category.findOrCreate({
          where: { name: prd[i].category },
          defaults: {
            id: prd[i].categoryId,
            // name: prd[i].category
          },
        });

        const categ = await Category.findOne({
          where: {id: prd[i].categoryId}
        })

        // console.log("sacando stateId...");
        const stateId = prd[i].state;

        // console.log("creando el producto ahora...");
        const product = await Product.create({
          id: prd[i].id,
          nombre: prd[i].nombre,
          codigoBarras: prd[i].codigoBarras,
          embalaje: prd[i].embalaje,
          precioBase: prd[i].precioBase,
          prodUrl: prd[i].prodUrl,
          descripcion: prd[i].descripcion.slice(0,500),
        });

        await product.setTax(tax);
        await product.setState(prd[i].stateId);
        await product.setProvider(provider);
        // console.log("cid");
        // console.log(categoryId.id);
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
