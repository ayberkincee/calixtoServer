//returns an user object
const { User, Owner } = require("../db.js");

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // const myUser = await User.findByPk(userId);
    const myUser = await User.findAll({
      where: { id: userId },
      include: [
        {
          model: Owner,
          attributes: [
            "logoOwner",
            "name",
            "sloganOwner",
            "cardType",
            "plan",
            "colorPrimario",
            "colorSecundario",
            "colorTerciario",
          ],
        },
      ],
    });
    res.status(200).json(myUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getOneUser;
