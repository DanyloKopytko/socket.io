const { authService } = require('../../service');
const { tokinizer } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExist = await authService.login(email, password);

        const token = tokinizer(userExist.dataValues);

        req.user = userExist.dataValues;

        await authService.tokenToDataBase(userExist.dataValues.id, token.accessToken, token.refreshToken);

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};