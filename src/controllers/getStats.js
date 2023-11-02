const {Stats} = require("../db");

const getStats = async (req, res) => {
    try {
        const FullStats = await Stats.findAll();
        res.status(200).json(FullStats);
    } catch (error) {
        res.status(400).send("error consiguiendo las estadisticas")
    }
}
module.exports = getStats;