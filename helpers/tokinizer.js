const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const { JWT_REFRESH } = require('../config');

module.exports = data => {
    const accessToken = jwt.sign(data, JWT_SECRET, {expiresIn:'15m'});
    const refreshToken = jwt.sign({}, JWT_REFRESH, {expiresIn: '24h'});

    return  {
        accessToken,
        refreshToken
    };
};