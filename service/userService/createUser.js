const dataBase = require('../../database').getInstance();

module.exports = async userToCreate => {
    const UserModel = dataBase.getModel('User');

    const user = await UserModel.create(userToCreate);

    return user.dataValues;
};