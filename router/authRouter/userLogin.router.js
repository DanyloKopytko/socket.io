const router = require('express').Router();

const { user: middlewareUser } = require('../../middleware');
const { user } = require('../../controllers');
const { renderUser } = require('../../render');

router.get('/', renderUser.login);

router.post('/', middlewareUser.loginDataValidation, user.loginUser);

module.exports = router;