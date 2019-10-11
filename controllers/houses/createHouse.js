const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    const houseToCreate = req.body;
    const HouseModel = dataBase.getModel('House');

    await HouseModel.create(houseToCreate);

    res.render('houseCreator');
};