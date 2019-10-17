const isUserExist = require('./isUserExist');
const loginDataValidation = require('./loginDataValidity');
const checkUserValidityMiddleWare = require('./checkUserValidity.middleware');
const checkUpdateUserValidityMiddleWare = require('./checkUpdateUserValidity.middleware');
const checkAccessTokenMiddleWare = require('./checkAccessToken.middleware');
const checkIsThisAPageOfCurrentUserMiddleWare = require('./checkIsThisAPageOfCurrentUser.middleware');

module.exports = {
  isUserExist,
  loginDataValidation,
  checkUserValidityMiddleWare,
  checkUpdateUserValidityMiddleWare,
  checkAccessTokenMiddleWare,
  checkIsThisAPageOfCurrentUserMiddleWare
};