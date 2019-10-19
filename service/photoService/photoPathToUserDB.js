const dataBase = require('../../database').getInstance();

module.exports = async (path, user_id) => {
    const UserToPhotoModel = dataBase.getModel('UserToPhoto');

    await UserToPhotoModel.create({
        user_id,
        path
    });
};