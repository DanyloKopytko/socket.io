//done

module.exports = (req, res) =>{
    const {name, email, id} = req.user;

    res.render('user', {username:` ${name}`, userEmail: `${email}`, userId: `${id}`});
};