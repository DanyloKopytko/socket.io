const dataBase = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.create(userToCreate);

        res.render('login');
    } catch (e) {
        res.json(e.message);
    }

};