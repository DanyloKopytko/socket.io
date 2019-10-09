//done

const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const userData = req.body;

        userValidator.newUserValidator(userData);

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};