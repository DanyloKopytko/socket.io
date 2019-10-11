const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUpdate = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(dataToUpdate, {
            where: {
                id: id
            }
        });

        res.redirect(`/houses/${id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};