const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUpdate = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.update(dataToUpdate, {
            where: {
                id: id
            }
        });

        res.redirect(`/users/${id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};