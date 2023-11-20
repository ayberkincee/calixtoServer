const { Stats } = require("../db");
const { Op } = require("sequelize");

const getStats = async (req, res) => {
  console.log("served by getStats");
  const { range } = req.body;
  const day = 86400000;
  const today = new Date();
  const initDate = new Date(today - range * day);
  // console.log("getStats9", range, initDate, today);

  try {
    const fullStats = await Stats.findAll({
      where: {
        createdAt: {
          [Op.lte]: today,
          [Op.gte]: initDate,
        },
      },
    });
    // console.log("FS-getStats20", fullStats);
    res.status(200).json(fullStats);
  } catch (error) {
    res.status(400).send(`error consiguiendo las estadisticas ${error}`);
  }
};
module.exports = getStats;
