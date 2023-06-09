const {
  Product,
  Provider,
  Tax,
  Category,
  Owner,
  State,
  Icon,
  User,
  Portfolio,
} = require("../db.js");

const { dataDb } = require("../assets/dataDb.js");

const owner = {
  id: 1,
  name: "SF Group",
  password: "qwer",
  plan: 40,
  logoOwner:
    "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg",
  sloganOwner: "Distribuyendo feicidad",
  cardType: 2,
};

const user = {
  id: 1,
  name: "Juanfer",
  password: "qwer",
};

const portfolio = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "two",
  },
  {
    id: 3,
    name: "three",
  },
];

//------------------------------------------------------------
async function bulkLoadDb(req, res) {
  try {
    await Tax.bulkCreate(dataDb.tax);
    await State.bulkCreate(dataDb.state);
    await Icon.bulkCreate(dataDb.icon);
    await Owner.create(owner);
    await Portfolio.bulkCreate(portfolio);
    const usr = await User.create(user);
    usr.setOwner(owner.id);
    usr.addPortfolio(portfolio[0].id);

    prd = req.body;
    for (let i = 0; i < prd.length; i++) {
      // req.body.map(async (prd) => {
      const prodExist = await Product.findOne({
        where: { codigo: prd[i].codigo },
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

        // console.log("sacando stateId...");
        const stateId = prd[i].state;

        // console.log("creando el producto ahora...");
        const product = await Product.create({
          codigo: prd[i].codigo,
          nombre: prd[i].nombre,
          codigoBarras: prd[i].codigoBarras,
          embalaje: prd[i].embalaje,
          precioBase: prd[i].precioBase,
          prodUrl: prd[i].prodUrl,
          descripcion: prd[i].descripcion,
        });

        await product.setTax(tax);
        await product.setState(prd[i].stateId);
        await product.setProvider(provider);
        // await product.setCategory(categoryId);
        await product.setOwner(prd[i].ownerId);
        prd[i].keto = "SI" ? product.addIcon(1) : product.addIcon(7);
        prd[i].vegano = "SI" ? product.addIcon(2) : product.addIcon(8);
        prd[i].vegetariano = "SI" ? product.addIcon(3) : product.addIcon(9);
        prd[i].diabetico = "SI" ? product.addIcon(4) : nulproduct.addIcon(10);
        prd[i].proteina = "SI" ? product.addIcon(5) : product.addIcon(11);
        prd[i].gluten = "SI" ? product.addIcon(6) : product.addIcon(12);
        const portfolios = prd[i].portfolios.split("|");
        portfolios.map((p) => {
          product.addPortfolio(p);
        });
      }
    }
    res.status(200).send("carga completa");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = bulkLoadDb;
