const dataBase = require('../../database').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    let user = await UserModel.findOne({
        where: {
            email,
            password
        },
        attributes: ['id', 'name']
    });

    if (!user) {
        throw new Error('Bad login or password');
    }

    return user;
};