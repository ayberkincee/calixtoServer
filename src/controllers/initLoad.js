//imports the models
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

//gets the local data needed to populate the database
//local data should be loaded only when the database is empty!
const { dataDb } = require("../assets/dataDb.js");

async function InitLoad(req, res) {
  // console.log("served by InitLoad");
  try {
    await Tax.bulkCreate(dataDb.tax);
    await State.bulkCreate(dataDb.state);
    await Icon.bulkCreate(dataDb.icon);
    await Owner.bulkCreate(dataDb.owner);
    await Portfolio.bulkCreate(dataDb.portfolio);
    const port1 = await Portfolio.findOne({ where: { id: 1 } });
    const port2 = await Portfolio.findOne({ where: { id: 2 } });
    await User.bulkCreate(dataDb.user);

    let usr = await User.findOne({ where: { id: 1 } });
    usr.setOwner(dataDb.owner[1].id);
    usr.addPortfolio(port1.id);

    usr = await User.findOne({ where: { id: 2 } });
    usr.setOwner(dataDb.owner[2].id); //vendedor pertenece a SF 
    usr.addPortfolio(port1.id);  //Portafolio Todos

    // console.log("datos iniciales cargados! 👍🏻");
    res.status(200).send("carga OK");
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
module.exports = InitLoad;