const { Owner } = require("../db.js");

const getAllUsers = async (req, res) => {
  console.log("atendido por getAllUsers");
  try {
    let allUsers = await Owner.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: "error al cargar los usuarios" });
  }
};
module.exports = getAllUsers;
