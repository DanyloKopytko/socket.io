const { houseService, photoService, userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const user_id = req.user;
        const file = req.photo;

        const { id: house_id } = await houseService.create(houseToCreate, user_id);

        const { name } = await userService.getById(user_id);

        await photoService.uploadHousePhotos(name, file, house_id);

        res.render('houseCreator');
    } catch (e) {
        res.json(e.message);
    }
};