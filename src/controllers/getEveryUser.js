const { User } = require("../db");

const getEveryUser = async(req, res) => {
console.log("atendido por getEveryUser");
  try {
    const users = await User.findAll();
    // console.log("getEveryUser6", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getEveryUser;
