const { authService } = require('../../service');
const { tokinizer } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const { dataValues } = await authService.login(email, password);

        const token = tokinizer(dataValues);

        req.user = dataValues;

        await authService.tokenToDataBase(dataValues.id, token.accessToken, token.refreshToken);

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};