const {Owner} = require("../db")

async function updateOwner(req, res) {
  const actualOwner = req.body;
  await Owner.update(actualOwner, {
    where: { id: actualOwner.id },
  });
  res.status(200).send("actualizacion OK");
}
module.exports = updateOwner;
