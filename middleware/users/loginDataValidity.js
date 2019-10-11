const dataBase = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const UserModel = dataBase.getModel('User');

        let userExist = await UserModel.findOne({
            where: {
                email: email,
                password: password
            },
            attributes: ['id']
        });

        if (!userExist) {
            throw new Error('Bad login or password');
        }

        req.user = userExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};