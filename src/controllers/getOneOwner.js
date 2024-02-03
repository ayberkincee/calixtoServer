//returns an owner object
const { Owner, Portfolio } = require("../db.js");

const getOneOwner = async (req, res) => {
  // console.log("atendido por getOneOwner");
  try {
    const { id } = req.params;
    let oneOwn = await Owner.findOne({
      where: { id: id },
    });

    const portfolios = await Portfolio.findAll();
    // const portfoliosId = portfolios.map(p=>{p.id :p.name});

    oneOwn.dataValues.portfoliosId = portfolios;
  
    return res.status(200).json(oneOwn);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
module.exports = getOneOwner;
