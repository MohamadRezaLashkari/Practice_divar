/**
 * @swagger
 * tags:
 *  name: Category 
 *  description: category Module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   name
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string    
 *                  slug:
 *                      type: string    
 *                  icon:
 *                      type: string    
 *                  parent:
 *                      type: string    
 */
/**
/**
 * @swagger
 *  /category:
 *      post:
 *          summary: create category 
 *          tags:
 *              -  Category
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/CreateCategory"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/CreateCategory"
 *          responses:
 *              201:
 *                  description: success
 */
/**
 * @swagger
 *  /category:
 *      get:
 *          summary: get all category
 *          tags:
 *              -  Category
 *          responses:
 *              200:
 *                  description: success
 */