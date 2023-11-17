const { Stats } = require("../db");
const { Op } = require("sequelize");

const getStats = async (req, res) => {
  const { range } = req.body;
  const day = 86400000;
  const today = new Date();
  const initDate = new Date(today - range * day);
//   console.log("QQ", range, initDate, today);

  try {
    const fullStats = await Stats.findAll({
      where: {
        createdAt: {
          [Op.lt]: today,
          [Op.gte]: initDate,
        },
      },
    });
    // console.log("FS", fullStats);
    res.status(200).json(fullStats);
  } catch (error) {
    res.status(400).send(`error consiguiendo las estadisticas ${error}`);
  }
};
module.exports = getStats;
