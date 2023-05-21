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
    const classId = prod.classId;
    const providerId = prod.providerId;

    prod = {
      codigo: prod.codigo,
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
    await newProd.setCategory(categoryId); //OneToMany
    await newProd.setOwner(ownerId); //OneToMany
    await newProd.addProvider(providerId); //ManyToMany
    await newProd.addClass(classId); //ManyToMany

    res.status(200).json(newProd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = postProduct;
