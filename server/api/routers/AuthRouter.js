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
 *         - name
 *         - UserId
 *       properties:
 *         name:
 *           type: string
 *           description: Category Name
 *         UserId:
 *           type: string
 *           description: User id/ shop Id
 *       example:
 *         _id: d5fE_asz
 *         name: mack
 *         UserId: d5fE_aszDewdney
 */

 /**
  * @swagger
  * tags:
  *   name: User
  *   description: The User auth api
  */


/**
 * @swagger
 * /User/sineUp :
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The Category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
authRouter.post('/sineUp', sineUp);

authRouter.post('/login', login);

// authRouter.post('/make-admin', auth, admin, makeAdmin);
module.exports = authRouter;
