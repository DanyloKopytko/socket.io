const { resolve } = require('path');
const fs = require('fs');

const photoPathToHouseDB = require('./photoPathToHouseDB');
const { createRandomName } = require('../../helpers');

module.exports = async (username, file, house_id) => {
    const path = global.appRoot + `/static/files/photos/${username}/house`;

    await fs.mkdirSync(resolve(path), { recursive: true });

    if (file.length) {
        for (const item of file) {
            let photoName = createRandomName(item);

            await item.mv(resolve(path, photoName));

            let pathToPhoto = `files/photos/${username}/house/${photoName}`;

            await photoPathToHouseDB(pathToPhoto, house_id);
        }
    } else {
        let photoName = createRandomName(file);

        await file.mv(resolve(path, photoName));

        let pathToPhoto = `files/photos/${username}/house/${photoName}`;

        await photoPathToHouseDB(pathToPhoto, house_id);
    }
};