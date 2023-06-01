//returns an owner object
const { Owner } = require("../db.js");

const getOneOwner = async (req, res) => {
  console.log("atendido por getOneOwner");
  try {
  const {id} = req.params;
    const oneOwn = await Owner.findByPk(id);
    return res.status(200).json(oneOwn);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
module.exports = getOneOwner;
