const { userService } = require('../../service');
const { user: middlewareUser } = require('../../middleware');

module.exports = async (req, res) => {
    try {
        const { user_id } = req.params;
        const dataToUpdate = req.body;
        const { id: userIdFromToken } = req.user;

        middlewareUser.checkIsThisAPageOfCurrentUser(user_id, userIdFromToken);

        await userService.update(dataToUpdate, user_id);

        res.redirect(`/users/${user_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};