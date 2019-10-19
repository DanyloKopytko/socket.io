const router = require('express').Router();

const { house: middlewareHouse, checkAccessToken } = require('../../middleware');
const { house } = require('../../controllers');
const { renderHouse } = require('../../render');

router.post(
    '/:house_id',
    checkAccessToken,
    middlewareHouse.isHouseExist,
    middlewareHouse.checkUpdateInputDataHouse,
    house.updateHouse
);

router.get(
    '/:house_id',
    middlewareHouse.isHouseExist,
    house.getHouse
);

router.post(
    '/',
    checkAccessToken,
    middlewareHouse.checkInputHouseDataValidity,
    middlewareHouse.checkFilesForHousesMiddleWare,
    house.createHouse
);

router.get(
    '/',
    renderHouse.houseCreator
);

module.exports = router;