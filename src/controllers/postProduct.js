const {
  Product,
  Tax,
  State,
  Provider,
  Owner,
  Class,
  Category,
} = require("../db.js");

const postProduct = async (req, res) => {
  try {
    let prod = req.body;
    const taxId = prod.taxId;
    const stateId = prod.stateId;
    const categoryId = prod.categoryId;
    const ownerId = prod.ownerId;
    const iconId = prod.iconId;
    const providerId = prod.providerId;
    const portfolioId = prod.portfolioId;

    prod = {
      codigo: prod.id,
      nombre: prod.nombre,
      codigoBarras: prod.codigoBarras,
      embalaje: prod.embalaje,
      precioBase: prod.precioBase,
      prodUrl: prod.prodUrl,
      descripcion: prod.descripcion,
    };

    const newProd = await Product.create(prod);

    await newProd.setTax(taxId); //OneToMany
    await newProd.setState(stateId); //OneToMany
    await newProd.setOwner(ownerId); //OneToMany
    await newProd.setCategory(categoryId); //OneToMany
    await newProd.setProvider(providerId); //ManyToMany
    await newProd.addIcon(iconId); //ManyToMany
    await newProd.addPortfolio(portfolioId); //ManyToMany

    res.status(200).json(newProd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = postProduct;
