const login = require('./login');
const tokenToDataBase = require('./tokenToDataBase');
const findTokenInDB = require('./findTokenInDB');

module.exports = {
    login,
    tokenToDataBase,
    findTokenInDB
};