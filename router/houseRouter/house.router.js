const router = require('express').Router();

const { house: middlewareHouse } = require('../../middleware');
const { house } = require('../../controllers');

router.post('/:id', middlewareHouse.checkUpdateInputDataHouse, middlewareHouse.isHouseExist, house.updateHouse);

router.get('/:id', middlewareHouse.isHouseExist, house.getHouse);

router.post('/', middlewareHouse.checkInputHouseDataValidity, house.createHouse);

module.exports = router;