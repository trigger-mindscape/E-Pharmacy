const express = require("express");
const { sineUp, login, makeAdmin } = require("../controllers/AuthController");
const { addCategory, getCategory } = require("../controllers/CategoryController");
const auth = require("../middleware/auth/Auth");
const vendorAuth = require("../middleware/auth/VendorAuth");

const categoryRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - vendorId
 *       properties:
 *         name:
 *           type: string
 *           description: Category Name
 *         vendorId:
 *           type: string
 *           description: vendor id/ shop Id
 *       example:
 *         _id: d5fE_asz
 *         name: mack
 *         vendorId: d5fE_aszDewdney
 */

 /**
  * @swagger
  * tags:
  *   name: Category
  *   description: The Vendor Category api
  */


/**
 * @swagger
 * /category/add :
 *   post:
 *     summary: Create a new category (Vendor)
 *     tags: [Category]
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
categoryRouter.post("/add",auth, vendorAuth, addCategory);


/**
 * @swagger
 * /category/get/:vendorId :
 *   get:
 *     summary: return all Category
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: The list of the Category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
 categoryRouter.get("/get/:vendorId", getCategory);

module.exports = categoryRouter;
