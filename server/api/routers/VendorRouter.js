const express = require("express");
const { sineUp, login, makeAdmin } = require("../controllers/AuthController");

const vendorRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Vendor:
 *       type: object
 *       required:
 *         - shopName
 *         - logo
 *         - banner
 *         - name
 *         - email
 *         - phone
 *         - password
 *         - confirmPassword
 *         - city
 *         - location
 *         - postalCode
 *         - hasOwnDelivery
 *       properties:
 *         shopName:
 *           type: string
 *           description: Vendor Shop Name
 *         logo:
 *           type: string
 *           description: Shop Logo image url
 *         banner:
 *           type: string
 *           description: Shop Banner image url
 *         name:
 *           type: string
 *           description: Shop Owner Name / Vendor Name
 *         email:
 *           type: string
 *           description: Vendor Email Address
 *         phone:
 *           type: string
 *           description: Vendor Phone Number
 *         password:
 *           type: string
 *           description: Password
 *         confirmPassword:
 *           type: string
 *           description: Confirm Password
 *         city:
 *           type: string
 *           description: Shop - City Name
 *         location:
 *           type: string
 *           description: Shop Details Location
 *         postalCode:
 *           type: string
 *           description: Shop Location Postal Code
 *         hasOwnDelivery:
 *           type: string
 *           description: Is Shop Have Own DElivery Service
 *
 *       example:
 *         _id: d5fE_asz
 *         shopName: My Shop
 *         logo: https://images.unsplash.com/photo-1632059368260-dcdbe93dbede
 *         banner: https://images.unsplash.com/photo-1632059368260-dcdbe93dbede
 *         name: Kamrul Islam
 *         email: kamrul@gmail.com
 *         phone: '01711111111'
 *         password: amePass
 *         confirmPassword: amePass
 *         city: tangail
 *         location: poran mor, kalihati
 *         postalCode: 0012
 *         hasOwnDelivery: true
 */

/**
 * @swagger
 * tags:
 *   name: Vendor
 *   description: The Vendor auth api
 */

/**
 * @swagger
 * /Vendor/auth/sineUp :
 *   post:
 *     summary: Create a new Vendor
 *     tags: [Vendor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vendor'
 *     responses:
 *       200:
 *         description: The Vendor was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendor'
 *       500:
 *         description: Some server error
 */

vendorRouter.post("/sineUp", sineUp);

/**
 * @swagger
 * /Vendor/auth/login :
 *   post:
 *     summary: Login in Vendor account
 *     tags: [Vendor]
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
 *                  description: Vendor Email Address
 *                password:
 *                  type: string
 *                  description: Password
 *             example:
 *                email: kamrul@gmail.com
 *                password: amePass
 *     responses:
 *       200:
 *         description: The Vendor was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendor'
 *       500:
 *         description: Some server error
 */
vendorRouter.post("/login", login);

module.exports = vendorRouter;
