const { houseValidators } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const houseData = req.body;

       houseValidators.newHouseValidator(houseData);

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};