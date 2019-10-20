const { houseService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res) => {
    try {
        const { house_id } = req.params;
        const userIdFromToken = req.user;

        const { user_id } = await houseService.getById(house_id);

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        await houseService.deleteHouse(house_id);

        res.render('houseCreator');
    } catch (e) {
        res.json(e.message);
    }
};