const { Product } = require("../db.js");

const deleteProduct = async (req, res) => {
    try {
     const { id } = req.params;
    await Product.update({isActive: false}, { where: { id: id } })
    const updatedProducts = await Product.findAll({where: {isActive: true}});
    res.status(200).json(updatedProducts)   
    } catch (error) {
        res.status(400).send("Error while trying to delete product");
    }
} 

module.exports = deleteProduct