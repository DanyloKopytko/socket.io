const router = require('express').Router();

const { user: middlewareUser } = require('../../middleware');
const { user } = require('../../controllers');

router.get('/:user_id', middlewareUser.isUserExist, user.getUser);

router.post('/:user_id', middlewareUser.checkUpdateUserValidityMiddleWare, middlewareUser.isUserExist, user.updateUser);

router.post('/', middlewareUser.checkUserValidityMiddleWare, user.createUser);

module.exports = router;