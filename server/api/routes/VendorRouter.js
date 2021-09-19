const express = require("express");
const { sineUp, login, makeAdmin } = require("../controllers/AuthController");

const vendorRouter = express.Router();

/**
@swagger 
components:
  schemas:
    vendor:
      type: object
      required:
        - shopName
        - logo
        - banner
        - name
        - email
        - phone
        - password
        - confirmPassword
        - city
        - location
        - hasOwnDelivery
      properties:
        shopName: 
            type: string
            description: vendor shop name
        logo:
            type: string
            description: shop logo image url
        banner:
            type: string
            description: shop banner url
        name: 
            type: string
            description: vendor name
        email:
            type: string
            description: vendor email address
        phone:
            type: number
            description: vendor phone number
        password:
            type: string
        confirmPassword:
            type: string
        city:
            type: string
            description: vendor shop city
        location:
            type: string
            description: vendor shop address in details
        postalCode:
            type: string
            description: vendor shop location postalCode
        hasOwnDelivery:
            type: string
            description: is Vendor has his own delivery
    example:
        shopName: My Shop
        logo: https://i.ibb.co/m079wqz/logo-1.jpg   
        banner: http://dummyimage.com/100x100.png/dddddd/000000
        name: Vendor Name
        email: vendor@gmail.com
        phone: 01711111111
        password: amePass
        confirmPassword: amePass
        city: kalihati, tangail
        location: 123 mor
        postalCode: 1002
        hasOwnDelivery:false

*/

vendorRouter.post("/sineUp", sineUp);

/**
 * @swagger
 * /vendor/auth/login
 * summary: for vendor sineUp and login
 * responses:
 *  200:
 *      description: a login user information
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  item:
 *                      $ref: '#components/schemas/vendor'
 *
 */

/**
 * @swagger
 * /vendor/auth/login:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
vendorRouter.post("/login", login);

module.exports = vendorRouter;
