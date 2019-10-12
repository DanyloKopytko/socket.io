const router = require('express').Router();

const { house: middlewareHouse } = require('../../middleware');
const { house } = require('../../controllers');
let { renderHouse } = require('../../render');

router.post('/:id', middlewareHouse.checkUpdateInputDataHouse, middlewareHouse.isHouseExist, house.updateHouse);

router.get('/:id', middlewareHouse.isHouseExist, house.getHouse);

router.post('/', middlewareHouse.checkInputHouseDataValidity, house.createHouse);

router.get('/', renderHouse.houseCreator);

module.exports = router;