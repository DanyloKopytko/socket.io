const dataBase = require('../../database').getInstance();

module.exports = async accessToken => {
    const OAthModel = dataBase.getModel('OAuth');

    const foundedToken = await OAthModel.findOne({
        where: {
            accessToken
        }
    });

    return foundedToken;
};