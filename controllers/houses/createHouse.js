const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const user_id = req.user;

        await houseService.create(houseToCreate, user_id);

        res.render('houseCreator');
    } catch (e) {
        res.json(e.message);
    }
};