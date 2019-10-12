module.exports = (req, res) =>{
    const {name, email, user_id} = req.user;

    res.render('user', {username:` ${name}`, userEmail: `${email}`, userId: `${user_id}`});
};