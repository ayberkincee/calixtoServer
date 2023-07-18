// await axios.post('/recSell', {userId, clienteBuscado, sells})
const {Sell} = require("../db.js");

async function recordSell(req, res) {
  let sells = req.body.sells;
  let sellsToDb = [];
  for (let key in sells) {
    sellsToDb.push(
        {
            productCodigo: Number(key),
            clientId: Number(req.body.clienteBuscado.id),
            userId:  Number(req.body.userId),
            quantity: Number(sells[key]),
        }
    )
  }
  // console.log(sellsToDb);

  await Sell.bulkCreate(sellsToDb)
  res.status(200).send('sell in db');
}
module.exports = recordSell;
