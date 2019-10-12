const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { house_id } = req.params;
        const dataToUpdate = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(dataToUpdate, {
            where: {
                id: house_id
            }
        });

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};