const dataBase = require('../../database').getInstance();

module.exports = async (path, house_id) => {
    const HouseToPhotoModel = dataBase.getModel('HouseToPhoto');

    await HouseToPhotoModel.create({
        house_id,
        path
    });
};