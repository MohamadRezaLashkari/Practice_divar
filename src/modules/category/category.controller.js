const autoBind = require("auto-bind");
const categoryService = require("./category.service");
const CategoryMessages = require("./category.message");
const HttpCodes = require("http-codes")
class CategoryController {
    #service;
    constructor() {
        autoBind(this)
        this.#service = categoryService
    }
    async create(req, res, next) {
        try {
            const { name, icon, slug, parent } = req.body
            await this.#service.create({ name, icon, slug, parent })
            return res.status(HttpCodes.CREATED).json({
                message: CategoryMessages.Created
            })
        } catch (e) {
            next(e)
        }
    }
    async find(req, res, next) {
        try {
            const categories = await this.#service.find()
            return res.json(categories)
        } catch (e) {
            next(e)
        }
    }
}
module.exports = new CategoryController()
