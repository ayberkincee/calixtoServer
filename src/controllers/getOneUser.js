const { Owner } = require("../db.js");

const getOneUser = async (req, res) => {
  console.log("atendido por getOneUser");
  try {
  const {id} = req.params;
    const oneUsr = await Owner.findByPk(id);
    return res.status(200).json(oneUsr);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
module.exports = getOneUser;
