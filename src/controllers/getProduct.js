const { Product, Tax } = require("../db");

async function getProduct(req, res) {
  const { productCodigo } = req.params;
  let prod = await Product.findAll({
    where:{id:productCodigo},
    include: 
      {
        model: Tax,
        attributes: [
          "tax"
        ]
      }
    
  })
 
  // console.log("prodBack",prod);
  res.status(200).json(prod);
}
module.exports = getProduct;
