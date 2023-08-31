//returns an array of owners objects
const { Owner } = require("../db.js");

const getAllOwners = async (req, res) => {
  // console.log("atendido por getAllOwners");
  try {
    let allOwners = await Owner.findAll();
    // console.log("allOwners",allOwners);
    res.status(200).json(allOwners);
  } catch (error) {
    res.status(400).json({ error: "error al cargar los usuarios" });
  }
};
module.exports = getAllOwners;
