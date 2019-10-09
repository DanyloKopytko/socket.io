const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const  {name, email } = req.body;

        const query = `UPDATE user SET name = ?, email = ? WHERE id = ?`;

        await provider.promise().query(query, [name, email, id]);

        res.redirect(`/users/${id}`);
    } catch (e) {
        res.status(400).json(e.message);
    }
};