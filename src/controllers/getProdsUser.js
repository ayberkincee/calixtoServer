//returns an array of product objects
const {
  Product,
  Provider,
  Portfolio,
  User,
  Icon,
  Category,
  State,
  Channel,
} = require("../db.js");

const getProdsUser = async (req, res) => {
  // console.log(`served by getProdsUser for user ${req.params.userId}`);
  try {
    const { userId } = req.params;

    //1-Encontrar los potafolios del usuario:
    let usrPort = await User.findOne({
      where: { id: userId }, //find the user with id = userId
      include: [
        {
          model: Portfolio, //includes the portfolio related
          through: { attributes: [] }, //no info from intermediate table is included
        },
      ],
    });

    usrPort = usrPort.portfolios.map((p) => p.id);
    //array of portfaolio ids for the user

    //2- Encontrar los productos de esos portafolios:
    let prodUser = [];

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
    const prodUserId = prodUser.map((p) => p.id); //prodUserId is an array of id of products

    prodUser = await Product.findAll({
      where: { id: prodUserId },
      include: [
        {
          model: Provider,
          attributes: ["name"],
        },
        {
          model: Icon,
          attributes: ["id", "iconUrl"],
          through: {
            attributes: [],
          },
        },
        {
          model: Channel,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          }
        },
        {
          model: Category,
          attributes: ["id", "name"],
        },
        {
          model: State,
          attributes: ["id"],
        },
      ],
    });
    let prove = prodUser.map((p) => p.provider?.name);
    let categ = prodUser.map((p) => p.category?.name);
    // console.log("categs from getProdUser", new Set(categ));
    //prove is an array with prividers names
    prove = Array.from(new Set(prove));
    categ = Array.from(new Set(categ));

    res.status(200).json({ prodUser, prove, categ });
  } catch (error) {
    //console.log("WWW",error);
    res.status(400).json({ error: error.message });
  }
};
module.exports = getProdsUser;
