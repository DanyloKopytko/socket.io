const dataBase = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const UserModel = dataBase.getModel('User');

        let userExist = await UserModel.findByPk(id);

        if (!userExist) {
          throw new Error('No such user in base');
        }

        req.user = userExist.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};