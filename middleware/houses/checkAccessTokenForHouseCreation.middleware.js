const { tokenVerificator } = require('../../helpers');
const { authService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw new Error('No token dude');
        }

        const foundedToken =  await authService.findTokenInDB(token);

        if (!foundedToken) {
            throw new Error('No such token in base');
        }

        const { id: user_id } = tokenVerificator(token);

        req.user = user_id;

        next();
    } catch (e) {
        res.status(403).json(e.message);
    }
};