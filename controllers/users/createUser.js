const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await userService.create(userToCreate);

        res.render('login');
    } catch (e) {
        res.json(e.message);
    }
};