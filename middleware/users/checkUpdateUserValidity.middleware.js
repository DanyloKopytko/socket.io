const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const userData = req.body;
        const { id } = req.params;

        userValidator.patchUserValidator(userData);

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};