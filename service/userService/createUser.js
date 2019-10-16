const dataBase = require('../../database').getInstance();

module.exports = async userToCreate => {
    const UserModel = dataBase.getModel('User');

    await UserModel.create(userToCreate);
};