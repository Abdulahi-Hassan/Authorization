const express = require('express');
const { GetUserID, GetAllUser, UpdateUser ,DeleteUser} = require('../controller/User-Controller');
const { SignUp, SignIn ,Change, Profile} = require('../controller/User-Authorization');
const { AdminAthorization, UserAthorization } = require('../middleware/Verify-Token');
const RefreshToken = require('../middleware/Refresh-Token');
const { Upload } = require('../Config/Database');
const router = express.Router();
router.get('/user/Alluser',AdminAthorization, GetAllUser).put('/user/Alluser/:id',Upload,AdminAthorization, UpdateUser).put('/Profile/:id',Upload,UserAthorization, Profile).delete('/user/Alluser/:id',AdminAthorization, DeleteUser).get('/user', UserAthorization, GetUserID).post('/signup',Upload, SignUp).post('/login', SignIn).post('/change', Change)
router.get('/refresh/user/Alluser',RefreshToken,AdminAthorization, GetAllUser).put('/refresh/user/Alluser/:id',RefreshToken,AdminAthorization, UpdateUser).delete('/refresh/user/Alluser/:id',RefreshToken,AdminAthorization, DeleteUser).get('/refresh/user',RefreshToken, UserAthorization, GetUserID).post('/signup', SignUp).post('/login', SignIn)

module.exports = router;