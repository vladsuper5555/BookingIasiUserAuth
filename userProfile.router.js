const { Router } = require('express');
const {
    checkCredentialsAgainstDatabase,
    addCredentialsToDatabase,
    checkCookie,
    logout,
    saveHealthData,
    getUserInfo,
    editLoggedUserInfo
} = require('./userProfile.controller.js');

const userProfileRouter = new Router();

userProfileRouter.post('/accessTokens', checkCredentialsAgainstDatabase);
userProfileRouter.get('/accessTokens', checkCookie);
userProfileRouter.delete('/accessTokens', logout);

userProfileRouter.post('/healthForm', saveHealthData);
userProfileRouter.patch('/healthForm', saveHealthData);

userProfileRouter.post('', addCredentialsToDatabase);
userProfileRouter.get('', getUserInfo);
userProfileRouter.patch('', editLoggedUserInfo);

module.exports = { userProfileRouter }
