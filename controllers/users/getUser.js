//done

module.exports = (req, res) =>{
    const neededUser = req.user;

    res.render('user', {username:` ${neededUser.name}`, userEmail: `${neededUser.email}`, userId: `${neededUser.id}`});
};