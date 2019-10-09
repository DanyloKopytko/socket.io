//done

const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM user WHERE id = ?`;
        const [userExist] = await provider.promise().query(query, [id]);

        if (!userExist.length) {
          throw new Error('No such user in base');
        }

        req.user = userExist;
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};