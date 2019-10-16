const dataBase = require('../../database').getInstance();

module.exports = async (dataToUpdate, user_id) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.update(dataToUpdate, {
        where: {
            id: user_id
        }
    });
};