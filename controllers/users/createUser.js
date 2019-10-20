const { userService, emailService, photoService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const file = req.photo;

        const { id: user_id } =  await userService.create(userToCreate);

        await photoService.uploadUserPhotos(userToCreate.name, file, user_id);

        // await emailService.sendEmail(userToCreate.email);

        res.render('login');
    } catch (e) {
        res.json(e.message);
    }
};