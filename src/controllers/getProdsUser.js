const { Product, Provider, Tax, Category, Owner, State, Icon } = require("../db.js");

const getProdsUser = async (req, res) => {
  try{
  const {userId} = req.params;

  //Encontrar los potafolios del usuario:
  let UsrPort = await User.findAll({
    where: {
      id: userId
    },
    include:[{
      model: User,
      attibutes: []
    }]
  })

//Encontrar los productos de esos portafolios:
  let allProducts = await Product.findAll({
    where: {
      userId: userId
    },
    include: [
      {
        model: User,
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
        through: {
          attributes: [],
        },
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
module.exports = getProdsUser;
