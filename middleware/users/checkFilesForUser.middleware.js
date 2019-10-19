const { approvedFilesTypes } = require('../../config');

module.exports = (req, res, next) => {
    try {
        if (!req.files || !req.files.file) {
            return next();
        }

        const { file } = req.files;

        if (file.length) {
            throw new Error('You can upload only one image!');
        } else {
            if (!approvedFilesTypes.includes(file.mimetype)) {
                throw new Error('Invalid photo extension');
            }
        }

        req.photo = file;

        next();
    } catch (e) {
        res.json(e.message);
    }
};