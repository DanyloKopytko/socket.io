const { userService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res) => {
    try {
        const { user_id } = req.params;
        const dataToUpdate = req.body;
        const userIdFromToken = req.user;

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        await userService.update(dataToUpdate, user_id);

        res.redirect(`/users/${user_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};