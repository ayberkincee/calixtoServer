//returns an array of product objects
const { Product, Provider, Tax, Category, Owner, State, Icon } = require("../db.js");

const getProdsOwner = async (req, res) => {
  try{
  const {owner} = req.params;

  let allProducts = await Product.findAll({
    where: {
      ownerId: owner,
      isActive: true
    },
    include: [
      {
        model: Owner,
        attributes: ["name"],
      },
      {
        model: Tax,
        attributes: ["tax"],
      },
      {
        model: Category,
        attributes: ["name"],
      },
      {
        model: State,
        attributes: ["id"]
      },
      {
        model: Provider,
        attributes: ["name"],
      },
      {
        model: Icon,
        attributes: ["iconUrl"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  res.status(200).json(allProducts);
}
catch (error) {
  res.status(400).json({error: "error al cargar los productos"})
}

}
module.exports = getProdsOwner;
