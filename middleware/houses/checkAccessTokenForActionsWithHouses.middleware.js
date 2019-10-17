const { tokenVerificator } = require('../../helpers');
const { authService, houseService } = require('../../service');
const { userValidator } = require('../../validators');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');
        const { house_id } = req.params;

        if (!token) {
            throw new Error('No token dude');
        }

        const foundedToken =  await authService.findTokenInDB(token);

        if (!foundedToken) {
            throw new Error('No such token in base');
        }

        const { id: userIdFromToken } = tokenVerificator(token);

        const { user_id } = await houseService.getById(house_id);

        userValidator.checkIsThisAPageOfCurrentUserValidator(user_id, userIdFromToken);

        next();
    } catch (e) {
        res.status(403).json(e.message);
    }
};