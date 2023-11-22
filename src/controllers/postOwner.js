const { Owner } = require("../db");

const postOwner = async(req, res) => {
  const owner = req.body;
    try {
  const newOwner = await Owner.findOrCreate({
    where: { id: owner.id },
    defaults: owner,
  });
  // console.log("onwer created");
  res.status(200).json(newOwner);
    } catch (error) {
  res.status(500).json({ err: error }); 
    }
}
module.exports = postOwner;
