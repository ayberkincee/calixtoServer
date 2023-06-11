const {
  Product,
  Provider,
  Tax,
  Category,
  Owner,
  State,
  Icon,
  User,
  Portfolio,
} = require("../db.js");

const loadDb = async (req, res) => {
  //   console.log("served by loadDb");
  //   console.log(req.body);
  try {
    const {
      category,
      state,
      icon,
      tax,
      provider,
      user,
      owner,
      portfolio,
      product,
    } = req.body;
    await Category.bulkCreate(category);
    await Tax.bulkCreate(tax);
    await Icon.bulkCreate(icon);
    await State.bulkCreate(state);
    await Provider.bulkCreate(provider);
    const users = await User.bulkCreate(user);
    await Owner.bulkCreate(owner);
    await Portfolio.bulkCreate(portfolio);
    const products = await Product.bulkCreate(product);

    products.map(async (p,i) => {
      await p.setCategory(100101+Math.floor(i*0.4));
      await p.addIcon(2);
      await p.addIcon(3);
      await p.addPortfolio(1+Math.floor(i*0.4));
      await p.addProvider(1+Math.floor(i*0.4));
      await p.setState(1);
      await p.setTax(4);
      await p.setOwner(1+Math.floor(i*0.4))
    });
    users.map(async (u,i) => {
        await u.setOwner(1+Math.floor(i*0.4));
        await u.addPortfolio(1+Math.floor(i*0.4))
    });
    res.status(200).send("cargue de DB OK");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = loadDb;
