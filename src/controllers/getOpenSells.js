const { Sell } = require("../db");

async function getOpenSells(req, res) {
  const {userId} = req.params;
  const sells = await Sell.findAll({
    where: {
      pending: true,
      userId: userId,
    },
  });
  // console.log('sells from controller', sells);
  res.status(200).json(sells);
}
module.exports = getOpenSells;
