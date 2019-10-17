const checkInputHouseDataValidity = require('./checkInputHouseDataValidity.middleware');
const isHouseExist = require('./isHouseExist');
const checkUpdateInputDataHouse = require('./checkUpdateInputDataHouse');
const checkAccessTokenForActionsWithHouses = require('./checkAccessTokenForActionsWithHouses.middleware');
const checkAccessTokenForHouseCreation = require('./checkAccessTokenForHouseCreation.middleware');

module.exports = {
  checkInputHouseDataValidity,
  isHouseExist,
  checkUpdateInputDataHouse,
  checkAccessTokenForActionsWithHouses,
  checkAccessTokenForHouseCreation
};