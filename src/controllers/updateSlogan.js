const { Owner } = require("../db");

function updateSlogan(req, res) {
  const { ownerId, slogan } = req.body;
  console.log("updateSlogan", ownerId, slogan);

  try {
      //   const owner = Owner.findByPk(ownerId);
  //   console.log(owner);
  //   owner.sloganOwner = slogan;
  Owner.update({ sloganOwner: slogan }, { where: { id: ownerId } });
  res.status(200).send("updated")
  } catch (error) {
    console.log(`errorSlogan: ${error}`);
    res.status(500).json({error: error.message})
  }

}
module.exports = updateSlogan;
