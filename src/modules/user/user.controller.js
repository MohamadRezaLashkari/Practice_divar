const autoBind = require("auto-bind");
const userService = require("./user.service");
const { UserMessage } = require("./user.messages");
const NodeEnv = require("../../common/constant/env.enum");
class UserController {
    #service;
    constructor() {
        autoBind(this)
        this.#service = userService

    }
    async whoami(req, res, next) {
        try {
            const user = req.user;
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new UserController