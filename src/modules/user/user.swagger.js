/**
 * @swagger
 * tags:
 *  name: User 
 *  description: User Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string    
 *                      example: "09386361334"
 */
/**
/**
 * @swagger
 *  /user/whoami:
 *      get:
 *          summary: get user profile
 *          tags:
 *              -  User
 *          responses:
 *              200:
 *                  description: success
 */