const { Stats } = require("../db.js");

const postStats = async (req, res) => {
  //adds a record to the stats table with the action performed by the user
  const { location, action, detail } = req.body;
  try {
    await Stats.create({
      location,
      action,
      detail,
    });
    res.status(200).send("estadistica guardada");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
module.exports = postStats;
