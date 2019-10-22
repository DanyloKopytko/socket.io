const { approvedFilesTypes } = require('../../config');

module.exports = (req, res, next) => {
    try {
        if (!req.files) {
            return next();
        }

        const file = Object.values(req.files);

        if (file.length > 1) {
            throw new Error('You can upload only one image!');
        } else {
            if (!approvedFilesTypes.includes(file[0].mimetype)) {
                throw new Error('Invalid photo extension');
            }
        }

        req.photo = file[0];

        next();
    } catch (e) {
        res.json(e.message);
    }
};