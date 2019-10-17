const isUserExist = require('./isUserExist');
const loginDataValidation = require('./loginDataValidity');
const checkUserValidityMiddleWare = require('./checkUserValidity.middleware');
const checkUpdateUserValidityMiddleWare = require('./checkUpdateUserValidity.middleware');
const checkAccessTokenMiddleWare = require('./checkAccessToken.middleware');
const checkIsThisAPageOfCurrentUser = require('./checkIsThisAPageOfCurrentUser.middleware');

module.exports = {
  isUserExist,
  loginDataValidation,
  checkUserValidityMiddleWare,
  checkUpdateUserValidityMiddleWare,
  checkAccessTokenMiddleWare,
  checkIsThisAPageOfCurrentUser
};