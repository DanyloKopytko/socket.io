const { resolve } = require('path');
const fs = require('fs');

const photoPathToUserDB = require('./photoPathToUserDB');
const { createRandomName } = require('../../helpers');

module.exports = async (username, file, user_id) => {
    const path = global.appRoot + `/static/files/photos/${username}`;

    await fs.mkdirSync(resolve(path), { recursive: true });

    let photoName = createRandomName(file);

    await file.mv(resolve(path, photoName));

    const pathToPhoto = `files/photos/${username}/${photoName}`;

    await photoPathToUserDB(pathToPhoto, user_id);
};