const router = require('express').Router();

const { user: middlewareUser, checkAccessToken } = require('../../middleware');
const { user } = require('../../controllers');

router.get(
    '/:user_id',
    middlewareUser.isUserExist,
    user.getUser
);

router.post(
    '/:user_id',
    checkAccessToken,
    middlewareUser.isUserExist,
    middlewareUser.checkUpdateUserValidityMiddleWare,
    user.updateUser
);

router.post(
    '/',
    middlewareUser.checkUserValidityMiddleWare,
    middlewareUser.checkFilesForUsersMiddleWare,
    user.createUser
);

module.exports = router;