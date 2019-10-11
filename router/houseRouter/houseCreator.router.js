const router = require('express').Router();

let { renderHouse } = require('../../render');

router.get('/', renderHouse.houseCreator);

module.exports = router;