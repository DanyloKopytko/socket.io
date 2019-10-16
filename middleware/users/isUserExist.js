const { userService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        const userExist = await userService.getById(user_id);

        req.user = userExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};