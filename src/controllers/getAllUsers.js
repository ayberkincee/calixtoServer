//returns an array of users objects
const { User } = require("../db.js");

const getAllUsers = async (req, res) => {
  try{
  const ownerId = req.params.ownerId;
  // console.log(ownerId);
  const users = await User.findAll({
    where: {
      ownerId: ownerId
    }
  })
  res.status(200).json(users)
}catch(error){
  res.status(400).json({error: error.message})
}
};
module.exports = getAllUsers;
