const express = require('express');
const { sineUp, login, makeAdmin } = require('../controllers/AuthController');
const { admin } = require('../middleware/auth/VendorAuth');
const { auth } = require('../middleware/auth/Auth');

const authRouter = express.Router();

authRouter.post('/sineUp', sineUp);

authRouter.post('/login', login);

// authRouter.post('/make-admin', auth, admin, makeAdmin);
module.exports = authRouter;
