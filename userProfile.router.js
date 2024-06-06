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

userProfileRouter.post('/users/healthForm', saveHealthData);
userProfileRouter.patch('/users/healthForm', saveHealthData);

userProfileRouter.post('/users', addCredentialsToDatabase);
userProfileRouter.get('/users', getUserInfo);
userProfileRouter.patch('/users', editLoggedUserInfo);

module.exports = { userProfileRouter }
