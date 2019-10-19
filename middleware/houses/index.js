const checkInputHouseDataValidity = require('./checkInputHouseDataValidity.middleware');
const isHouseExist = require('./isHouseExist');
const checkUpdateInputDataHouse = require('./checkUpdateInputDataHouse');
const checkFilesForHousesMiddleWare = require('./checkFilesForHouses.middleware');

module.exports = {
  checkInputHouseDataValidity,
  isHouseExist,
  checkUpdateInputDataHouse,
  checkFilesForHousesMiddleWare
};