//returns an array of product objects
const {
  Product,
  Provider,
  Portfolio,
  User,
  Icon,
  Category,
  Tax,
  State,
} = require("../db.js");

const getProdsUser = async (req, res) => {
  try {
    const { userId } = req.params;

    //Encontrar los potafolios del usuario:
    let usrPort = await User.findAll({
      where: { id: userId }, //find the user with id = userId
      include: [
        {
          model: Portfolio, //includes the portfolio related
          through: { attributes: [] }, //no info from intermediate table is inclueded
        },
      ],
    });
    usrPort = usrPort[0].portfolios.map((p) => p.id);

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //usrPort = [1, 3, 4];
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    console.log(`portafolios del usuario: ${usrPort}`);
    //array of portfaolio ids for the user

    let prodUser = [];
    //Encontrar los productos de esos portafolios:

    prodUser = await Portfolio.findAll({
      where: { id: usrPort },
      include: {
        model: Product,
        through: { attributes: [] },
      },
    });

    let pu = prodUser.map((p) => p.products);
    prodUser = [];
    pu.map((p) => p.map((q) => prodUser.push(q))); //prodUser is an array of objects of products
    const prodUserId = prodUser.map((p) => p.codigo); //prodUserId is an array of id of products

    prodUser = await Product.findAll({
      where: { codigo: prodUserId },
      include: [
        {
          model: Provider,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Icon,
          attributes: ["iconUrl"],
          through: {
            attributes: [],
          },
        },
        {
          model: Category,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Tax,
          attributes: ["tax"],
        },
        {
          model: State,
          attributes: ["id"],
        },
      ],
    });

    prove = prodUser.map((p) => p.providers.map((q) => q.name));
    
    pu=[];
    prove.map(p=>p.map(q=>pu.push(q)));
    prove = Array.from(new Set(pu));

    res.status(200).json({ prodUser, prove });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getProdsUser;
