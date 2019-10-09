module.exports = (req, res) => {
    const [neededUser] = req.user;

    console.log(neededUser);

    res.redirect(`users/${neededUser.id}`);
};