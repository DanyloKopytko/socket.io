const dataBase = require('../../database').getInstance();

module.exports = async (houseToCreate, user_id) => {
    const HouseModel = dataBase.getModel('House');

    const { meters, city, price, street } = houseToCreate;

    await HouseModel.create({
        user_id,
        meters,
        city,
        price,
        street
    });
};