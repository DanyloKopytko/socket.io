const dataBase = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const UserModel = dataBase.getModel('User');

        let userExist = await UserModel.findByPk(user_id);

        if (!userExist) {
          throw new Error('No such user in base');
        }

        req.user = userExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};