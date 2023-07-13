//returns if session is valid
const { Owner } = require("../db.js");

const getSession = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;
        const found = await Owner.findOne({
            where: {
                id: email,
                password: password
            }
        })
        if (found) res.status(200).json(found)
        else res.status(404).send("User not found")
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = getSession;
