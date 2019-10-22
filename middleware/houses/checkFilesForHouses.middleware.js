const { approvedFilesTypes } = require('../../config');

module.exports = (req, res, next) => {
    try {
        if (!req.files) {
            return next();
        }

        const [ file ] = Object.values(req.files);

        if (file.length > 1) {
            file.forEach((item) => {
                if (!approvedFilesTypes.includes(item.mimetype)) {
                    throw new Error('One of the photos have invalid extension');
                }
            });
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