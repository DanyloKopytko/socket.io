const { tokenVerificator } = require('../../helpers');
const { authService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');
        const { user_id } = req.params;

        if (!token) {
            throw new Error('No token dude');
        }

        const { id: userIdFromToken } = tokenVerificator(token);

        const foundedToken =  await authService.findTokenInDB(token);

        if (!foundedToken) {
            throw new Error('No such token in base');
        }

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        next();
    } catch (e) {
        res.status(403).json(e.message);
    }
};