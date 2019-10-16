const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const { house_id } = req.params;
        const dataToUpdate = req.body;
        const { id: userIdFromToken } = req.user;

        const { user_id } = await houseService.getById(house_id);

        if ( user_id !== userIdFromToken) {
            throw new Error('This is not your house, invader');
        }

        await houseService.update(dataToUpdate, house_id);

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};