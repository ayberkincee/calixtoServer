const { Product } = require("../db.js");

const patchProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const updatedProduct = Product.update(update, { where: { codigo: id } })
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).send("Error while trying to update product")
    }
}

module.exports = patchProduct;