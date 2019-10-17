const checkInputHouseDataValidity = require('./checkInputHouseDataValidity.middleware');
const isHouseExist = require('./isHouseExist');
const checkUpdateInputDataHouse = require('./checkUpdateInputDataHouse');

module.exports = {
  checkInputHouseDataValidity,
  isHouseExist,
  checkUpdateInputDataHouse
};