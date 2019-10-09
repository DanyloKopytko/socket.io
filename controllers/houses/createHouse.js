const { provider } = require('../../database');

module.exports = async (req, res) => {
    const { city, meters, price, street } = req.body;
    const query = `INSERT INTO house(meters, city, price, street) VALUES(?, ?, ?, ?)`;

    await provider.promise().query(query, [meters, city, price, street]);

    res.render('houseCreator');
};