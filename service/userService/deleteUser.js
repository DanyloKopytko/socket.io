const dataBase = require('../../database').getInstance();

module.exports = async id => {
    const UserModel = dataBase.getModel('User');

    await UserModel.destroy({
        where: {
            id
        }
    });
};