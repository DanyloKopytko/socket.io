const uuidv4 = require('uuid/v4');

module.exports = file => {
    let extension = file.name.split('.').pop();
    let name = uuidv4();

    let randomName = `${name}.${extension}`;

    return randomName;
};