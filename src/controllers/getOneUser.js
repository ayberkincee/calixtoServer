//returns an user object
const { User } = require("../db.js");

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const myUser = await User.findByPk(userId);
    res.status(200).json(myUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getOneUser;
