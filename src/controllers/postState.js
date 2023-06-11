const { Sequelize } = require("sequelize");
const { Owner, State } = require("../db.js");

const postState = async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    try {
        const owner = await Owner.findOne({ where: { id: id }, include: [State] })
        const hasState = owner.states.find((state) => state === id)
        const doesStateExist = await State.findOne({
            where: Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('name')),
                Sequelize.fn('lower', state)
            )
        });
        let createdState;
        if (doesStateExist) {
            if (!hasState) {
                owner.addState(doesStateExist.id)
            }
        } else {
            createdState = await State.create({
                name: state
            })
            owner.addState(createdState.id)
        }
        res.status(200).json(owner)
    } catch (error) {
        res.status(400).send('Error while posting the state')
    }

}

module.exports = postState;