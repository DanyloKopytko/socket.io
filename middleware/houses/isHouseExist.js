const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM house WHERE id = ?`;
        const [houseExist] = await provider.promise().query(query, [id]);

        if (!houseExist.length) {
            throw new Error('No such house in base');
        }

        req.house = houseExist;
        req.id = id;
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};