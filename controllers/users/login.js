module.exports = (req, res) => {
    const { id: user_id } = req.user;

    res.redirect(`users/${user_id}`);
};