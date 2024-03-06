const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const CategoryModel = require("./category.model");
const { isValidObjectId, Types } = require("mongoose");
const categoryMessages = require("./category.message");
const slugify = require('slugify')
class CategoryService {
    #model;
    constructor() {
        autoBind(this)
        this.#model = CategoryModel
    }
    async find() {
        return await this.#model.find({ parent: { $exists: false } }) 
    }
    async create(categoryDto) {
        if (categoryDto?.parent && isValidObjectId(categoryDto.parent)) {
            const existCategory = await this.checkExistById(categoryDto.parent)
            categoryDto.parent = existCategory._id
            categoryDto.parents = [
                ... new Set(
                    ([existCategory._id.toString()].concat(
                        existCategory.parents.map(id => id.toString()))
                    )).keys(id => new Types.ObjectId({ id }))
            ]
        }
        if (categoryDto?.slug) {
            categoryDto.slug = slugify(categoryDto.slug)
            await this.alreadyExistBySlug(categoryDto.slug)
        } else {
            categoryDto.slug = slugify(categoryDto.name)
        }
        const category = await this.#model.create(categoryDto)
        return category
    }
    async checkExistById(id) {
        const category = await this.#model.findById(id)
        if (!category) throw new createHttpError.NotFound(categoryMessages.NotFound)
        return category
    }
    async checkExistBySlug(id) {
        const category = await this.#model.findOne({ slug })
        if (!category) throw new createHttpError.NotFound(categoryMessages.NotFound)
        return category
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({ slug })
        if (category) throw new createHttpError.Conflict(categoryMessages.ALearyExit)
        return null
    }
}
module.exports = new CategoryService()