//done

const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const { email, password} = req.body;
        const query = `SELECT * FROM user WHERE (email = ? AND password = ?)`;
        const [userExist] = await provider.promise().query(query, [email, password]);

        if (!userExist) {
            throw new Error('Bad login or password');
        }

        req.user = userExist;
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};