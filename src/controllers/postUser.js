const { User } = require("../db.js");

async function postUser(req, res) {
  console.log("atendido por postUser");

  try {
    const nw = req.body;
    const ownerId = nw.ownerId;
    const newUser = {
      id: nw.id,
      name: nw.nombre,
      password: nw.psw,
      isActive: true,
    };
    const myNewUser = await User.create(newUser);
    myNewUser.setOwner(ownerId);
    myNewUser.addPortfolio(1);
    res.status(200).json(myNewUser);
  } catch (error) {
    console.log(error);
    res.status(500).message(error);
  }
}
module.exports = postUser;
