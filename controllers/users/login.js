module.exports = (req, res) => {
    const neededUser = req.user;

    res.redirect(`users/${neededUser.id}`);
};