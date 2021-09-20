const express = require('express');
const { sineUp, login, makeAdmin } = require('../controllers/AuthController');


const authRouter = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fastName
 *         - lastName
 *         - userName
 *         - email
 *         - phone
 *         - password
 *         - cmPassword
 *       properties:
 *         fastName:
 *           type: string
 *           description: User Fast Name
 *         lastName:
 *           type: string
 *           description: User Last Name
 *         userName:
 *           type: string
 *           description: User User Name
 *         email:
 *           type: string
 *           description: User Email Address
 *         phone:
 *           type: string
 *           description: User Phone Number
 *         password:
 *           type: string
 *           description: Password
 *         cmPassword:
 *           type: string
 *           description: Confirm Password
 *
 *       example:
 *         _id: d5fE_asz
 *         fastName: Kamrul
 *         lastName: Islam
 *         userName: KamrulYs
 *         email: kamrul@gmail.com
 *         phone: '01711111111'
 *         password: amePass'
 *         cmPassword: amePass
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User auth api
 */

/**
 * @swagger
 * /auth/sineUp :
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

authRouter.post('/sineUp', sineUp);


/**
 * @swagger
 * /auth/login :
 *   post:
 *     summary: Login in User account
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *                - email
 *                - password
 *             properties:
 *                email:
 *                  type: string
 *                  description: User Email Address
 *                password:
 *                  type: string
 *                  description: Password
 *             example:
 *                email: kamrul@gmail.com
 *                password: amePass
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
authRouter.post('/login', login);

// authRouter.post('/make-admin', auth, admin, makeAdmin);
module.exports = authRouter;
