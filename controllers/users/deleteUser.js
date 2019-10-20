const { userService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res) => {
    try {
        const { user_id } = req.params;
        const userIdFromToken = req.user;

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        await userService.deleteUser(user_id);

        res.render('login');
    } catch (e) {
        res.status(400).json(e.message);
    }
};