const { houseService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res) => {
    try {
        const { house_id } = req.params;
        console.log(house_id);
        const dataToUpdate = req.body;
        const userIdFromToken = req.user;
        const { user_id } = req.house;

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        await houseService.update(dataToUpdate, house_id);

        res.redirect(`/houses/${ house_id }`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};