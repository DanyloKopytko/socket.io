const dataBase = require('../../database').getInstance();

module.exports = async (user_id, accessToken, refreshToken) => {
    const OAthModel = dataBase.getModel('OAuth');

    await OAthModel.create({
        user_id,
        accessToken,
        refreshToken
    });
};