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
  console.log(`served by getProdsUser for user ${req.params.userId}`);
  try {
    const { userId } = req.params;
    //Encontrar los potafolios del usuario:
    let usrPort = await User.findOne({
      where: { id: userId }, //find the user with id = userId
      include: [
        {
          model: Portfolio, //includes the portfolio related
          through: { attributes: [] }, //no info from intermediate table is inclueded
        },
      ],
    });

    // console.log('usrPort');
    // console.log(usrPort);
    usrPort = usrPort.portfolios.map((p) => p.id);
    // console.log(`portafolios del usuario: ${usrPort}`);
    // console.log(usrPort);
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
    // console.log('pu');
    // console.log(pu);
    prodUser = [];
    pu.map((p) => p.map((q) => prodUser.push(q))); //prodUser is an array of objects of products
    // console.log("produser q");
    // console.log(prodUser);

    const prodUserId = prodUser.map((p) => p.codigo); //prodUserId is an array of id of products
    // console.log("prodUserId");
    // console.log(prodUserId);
    prodUser = await Product.findAll({
      where: { codigo: prodUserId },
      include: [
        {
          model: Provider,
          attributes: ["name"],
        },
        {
          model: Icon,
          attributes: ["id","name","iconUrl"],
          through: {
            attributes: [],
          },
        },
        {
          model: Category,
          attributes: ["name"],
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
    // console.log("produser RRR");
    // console.log(prodUser[0].icons);
    let prove = prodUser.map((p) => p.provider.name);
    let categ = prodUser.map(p=>p.category.name)
    //prove is an array with prividers names
    // console.log("prove s");
    // console.log(prove);
    //pu = [];
    //prove.map((p) => p.map((q) => pu.push(q)));
    prove = Array.from(new Set(prove));
    categ = Array.from(new Set(categ));
    // console.log("prove t");
    // console.log(prove);
    res.status(200).json({ prodUser, prove, categ });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getProdsUser;
