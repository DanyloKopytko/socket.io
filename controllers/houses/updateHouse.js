const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const  { city, meters, price, street} = req.body;
        const query = `UPDATE house SET city = ?, meters = ?, price = ?, street = ? WHERE id = ?`;

        await provider.promise().query(query, [city, meters, price, street, id]);

        res.redirect(`/houses/${id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};