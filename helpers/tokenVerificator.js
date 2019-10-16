const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

let user;

module.exports = token => {
    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) {
            throw new Error('Token is not valid');
        }

        user = decode;
    });

    return user;
};