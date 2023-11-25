const {Icon} = require("../db")

const getAllIcons = async (req, res) => {
    try {
        const allIcons = await Icon.findAll()
        console.log(allIcons);
        res.status(200).json(allIcons)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getAllIcons;