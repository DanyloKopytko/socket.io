const { houseService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { house_id } = req.params;

        const houseExist = await houseService.getById(house_id);

        req.house = houseExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};