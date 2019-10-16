const dataBase = require('../../database').getInstance();

module.exports = async house_id => {
    const HouseModel = dataBase.getModel('House');

    let house = await HouseModel.findByPk(house_id);

    if (!house) {
        throw new Error('No such house in base');
    }

    return house;
};