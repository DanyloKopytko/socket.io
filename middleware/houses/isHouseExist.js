const dataBase = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const HouseModel = dataBase.getModel('House');

        let houseExist = await HouseModel.findByPk(id);

        if (!houseExist) {
            throw new Error('No such house in base');
        }

        req.house = houseExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};