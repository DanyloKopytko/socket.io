const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const { user_id } = req.params;
        const dataToUpdate = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.update(dataToUpdate, {
            where: {
                id: user_id
            }
        });

        res.redirect(`/users/${user_id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};