const { User } = require("../db.js");

async function postUser(req, res) {
  console.log("atendido por postUser");

  try {
    const nw = req.body;
    const ownerId = nw.ownerId;
    const portfolioId =nw.portfolioId
    const newUser = {
      id: nw.id,
      name: nw.nombre,
      password: nw.psw,
      isActive: true,
      priceList: nw.precio,
      profile: nw.perfil,
    };
    const myNewUser = await User.create(newUser);
    myNewUser.setOwner(ownerId);
    myNewUser.addPortfolio(portfolioId);
    res.status(200).json(myNewUser);
  } catch (error) {
    console.log(error);
    res.status(500).message(error);
  }
}
module.exports = postUser;
