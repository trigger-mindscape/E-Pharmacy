const express = require("express");
const { sineUp, login, makeAdmin } = require("../controllers/AuthController");
const { addProduct,  getProducts, getSingleProduct } = require("../controllers/ProductController");
const auth = require("../middleware/auth/Auth");
const vendorAuth = require("../middleware/auth/VendorAuth");

const productRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - description
 *         - price
 *         - brand
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           description: Product Name
 *         image:
 *           type: string
 *           description: Product Image URL
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           description: Product Price
 *         brand:
 *           type: string
 *           description: Product Brand Name
 *         category:
 *           type: string
 *           description: Product Category Name
 *
 *       example:
 *         _id: d5fE_asz
 *         vendorId: d5fE_aszKamrul
 *         name: Antimonium
 *         image: https://i.ibb.co/pb2hQs5/5-14-1000x1000-min.jpg
 *         description: sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger     
 *         price: 24
 *         rating: 5
 *         totalReview: 12
 *         brand: Structural (Fabrication)
 *         category: Construction Clean'
 *         document: 0
 *         isDeliveryFree: false
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: The Vendor Product api
 */

/**
 * @swagger
 * /product/add :
 *   post:
 *     summary: Create a new Product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The Product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */

productRouter.post("/add",auth, vendorAuth, addProduct);

/**
 * @swagger
 * /product/get/:vendorId :
 *   get:
 *     summary: Get a single Vendor Products
 *     tags: [Product]
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
 *                  description: Product Email Address
 *                password:
 *                  type: string
 *                  description: Password
 *             example:
 *                email: kamrul@gmail.com
 *                password: amePass
 *     responses:
 *       200:
 *         description: The Product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
productRouter.get("/get/:vendorId", getProducts);

/**
 * @swagger
 * /product/single/get/:vendorId :
 *   get:
 *     summary: Get a single Vendor Products
 *     tags: [Product]
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
 *                  description: Product Email Address
 *                password:
 *                  type: string
 *                  description: Password
 *             example:
 *                email: kamrul@gmail.com
 *                password: amePass
 *     responses:
 *       200:
 *         description: The Product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
productRouter.get("/single/get/:productId", getSingleProduct);

// authRouter.post('/make-admin', auth, admin, makeAdmin);
module.exports = productRouter;
