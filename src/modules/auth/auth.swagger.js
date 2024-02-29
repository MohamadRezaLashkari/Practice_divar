/**
 * @swagger
 * tags:
 *  name: Auth 
 *  description: Auth Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string    
 *                      example: "09386361334"
 *          CheckOTP:
 *               type: object
 *               required:
 *                   -   mobile
 *                   -   code
 *               properties:
 *                   mobile:
 *                       type: string
 *                       example: "09386361334"
 *                   code:
 *                       type: string
 *                       example: "44123"
 */
/**
 * @swagger
 *  /auth/send-otp:
 *      post:
 *          summary: login with OTP in this end-point
 *          tags: 
 *              -  Auth
 *          requestBody:    
 *              content: 
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/SendOTP"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/SendOTP"
 *          responses:
 *              200:
 *                  description: success
 */
/**
 * @swagger
 *  /auth/check-otp:
 *      post:
 *          summary: check otp for login 
 *          tags:
 *              -  Auth
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/CheckOTP"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/CheckOTP"
 *          responses:
 *              200:
 *                  description: success
 */