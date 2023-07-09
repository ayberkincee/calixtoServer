const { Client, User } = require("../db.js");

async function postClient(req, res) {
  console.log("atendido por postClient");
  const { id, name, email, phone, user } = req.body;
  try{
  await Client.findOrCreate({
    where: { id: id },
    defaults: {
      name: name,
      email: email,
      phone: phone,
    },
  });
  const usr = await User.findOne({where:{id:user}})
  const cli = await Client.findOne({where:{id:id}})

  await cli.setUser(usr);
  res.status(200).send("Cliente creado!");
}catch(err){
    res.status(500).json({error:err})
}
}
module.exports = postClient;
