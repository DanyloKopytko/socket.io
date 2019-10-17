const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const { house_id } = req.params;
        const dataToUpdate = req.body;

        await houseService.update(dataToUpdate, house_id);

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};