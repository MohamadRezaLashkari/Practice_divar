const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const categoryMessages = require("./category.message");
const prisma = require('./../../config/prisma.config')
class CategoryService {
    #model;
    constructor() {
        autoBind(this)
        this.#model = prisma
    }
    async find() {
        return await this.#model.Category.findMany()
    }
    async create(categoryDto) {
        if (categoryDto?.parent) {
            const existCategory = await this.checkExistById(categoryDto.parent)
            categoryDto.parent = parseInt(existCategory[0].id)
            categoryDto.parents = existCategory
        }
        if (categoryDto?.slug) {
            await this.alreadyExistBySlug(categoryDto.slug)
        }
        else {
            categoryDto.slug = categoryDto.name
        }
        const { name, slug, parent, icon, parents } = categoryDto
        const category = await this.#model.Category.create({ data: { name, slug, parent, parents, icon } })
        return category
    }
    async checkExistById(id) {
        const category = await this.#model.Category.findMany({ where: { id: parseInt(id) } });
        if (category.length === 0) throw new createHttpError.NotFound(categoryMessages.NotFound)
        return category
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.Category.findMany({ where: { slug } });
        if (category.length > 0) throw new createHttpError.Conflict(categoryMessages.ALearyExit)
        return null
    }
}
module.exports = new CategoryService()