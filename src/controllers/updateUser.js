const { User } = require("../db");

async function updateUser(req, res) {
  const newUser = req.body;
  console.log("atendido por updateUser");

  try {
    await User.update(newUser, { where: { id: newUser.id } });
    res.status(200).send("update user ok");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = updateUser;
