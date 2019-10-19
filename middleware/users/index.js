const isUserExist = require('./isUserExist');
const loginDataValidation = require('./loginDataValidity');
const checkUserValidityMiddleWare = require('./checkUserValidity.middleware');
const checkUpdateUserValidityMiddleWare = require('./checkUpdateUserValidity.middleware');
const checkFilesForUsersMiddleWare = require('./checkFilesForUser.middleware');

module.exports = {
  isUserExist,
  loginDataValidation,
  checkUserValidityMiddleWare,
  checkUpdateUserValidityMiddleWare,
  checkFilesForUsersMiddleWare
};