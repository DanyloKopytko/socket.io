const { JWT_SECRET, JWT_REFRESH} = require('./JWTconfigs');
const { nigerianPrinceNeedYourHelp, email, password } = require('./emailConfigs');
const { approvedFilesTypes } = require('./fileTypesConfigs');

module.exports.JWT_SECRET = JWT_SECRET;
module.exports.JWT_REFRESH = JWT_REFRESH;
module.exports.nigerianPrinceNeedYourHelp = nigerianPrinceNeedYourHelp;
module.exports.email = email;
module.exports.password = password;
module.exports.approvedFilesTypes = approvedFilesTypes;