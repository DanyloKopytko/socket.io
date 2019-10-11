const router = require('express').Router();

let { renderUser } = require('../../render');

router.get('/', renderUser.register);

module.exports = router;