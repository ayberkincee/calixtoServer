//returns an array of product objects
const { Product, Provider, Portfolio, User } = require("../db.js");

const getProdsUser = async (req, res) => {
  try {
    const { userId } = req.params;

    //Encontrar los potafolios del usuario:
    let usrPort = await User.findAll({
      where: { id: userId },
      include: [Portfolio],
    });
    usrPort = usrPort[0].portfolios.map((p) => p.id);

    let prodUser = [];
    //Encontrar los productos de esos portafolios:
    for (let i = 0; i < usrPort.length; i++) {
      prodUser = await Portfolio.findAll({
        where: { id: usrPort[i] },
        include: [Product]
      });
    }
    prodUser = prodUser[0].products;
    //array of product objects

    let prove = [];
    for (let i = 0; i < prodUser.length; i++) {
      prove = await Product.findAll({
        where: { codigo: prodUser[i].codigo },
        include: [Provider],
      });
    }
    prove = prove[0].providers;

    res.status(200).json({ prodUser, prove });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getProdsUser;
