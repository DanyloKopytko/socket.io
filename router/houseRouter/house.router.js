const router = require('express').Router();

const { house: middlewareHouse, user: middlewareUser } = require('../../middleware');
const { house } = require('../../controllers');
const { renderHouse } = require('../../render');

router.post('/:house_id', middlewareHouse.checkUpdateInputDataHouse, middlewareHouse.isHouseExist, middlewareUser.checkAccessTokenMiddleWare, house.updateHouse);

router.get('/:house_id', middlewareHouse.isHouseExist, house.getHouse);

router.post('/', middlewareHouse.checkInputHouseDataValidity, middlewareUser.checkAccessTokenMiddleWare, house.createHouse);

router.get('/', renderHouse.houseCreator);

module.exports = router;