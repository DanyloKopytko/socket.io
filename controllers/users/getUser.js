module.exports = (req, res) =>{
    const {id: user_id, name, email} = req.userData;

    res.render('user', {username: `${name}`, userEmail: `${email}`, userId: `${user_id}`});
};