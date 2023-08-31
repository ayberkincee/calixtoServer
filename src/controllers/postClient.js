const { Client, User } = require("../db.js");

async function postClient(req, res) {
  // console.log("atendido por postClient");
  const myClient = req.body;
  const {id} = myClient;
  const {userId} = myClient

  // try{
  const ClientDb = await Client.findByPk(id);
  if (ClientDb) {
    // console.log("updating client");
    await Client.update(myClient, { where: { id: id } });
  } else {
    // console.log("creating client");
    await Client.create(myClient);
  }

  const usr = await User.findOne({ where: { id: userId } });
  const cli = await Client.findOne({ where: { id: id } });

  await cli.setUser(usr);
  res.status(200).send("Cliente listo!");
  // }catch(err){
  // res.status(500).json({error:err})
  // }
}
module.exports = postClient;
