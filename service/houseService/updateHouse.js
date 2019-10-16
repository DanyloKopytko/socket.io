const dataBase = require('../../database').getInstance();

module.exports = async (dataToUpdate, house_id) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(dataToUpdate, {
        where: {
            id: house_id
        }
    });
};