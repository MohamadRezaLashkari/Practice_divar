const autoBind = require("auto-bind");
const authService = require("./auth.service");
const { AuthMessage } = require("./auth.messages");

class AuthController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = authService
    }
    async sendOTP(req, res, next) {
        try {
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile)
            return res.json({ message: AuthMessage.SendOtpSuccessfully })
        } catch (error) {
            console.log(error);
            next(error)
        }

    }

    async checkOTP(req, res, next) {
        try {
            const { mobile, code } = req.body;
            await this.#service.checkOTP(mobile, code)
            return res.json({ message: AuthMessage.LoginSuccessfully })
        } catch (error) { 
            console.log(error);
            next(error)
        }
    }

}
module.exports = new AuthController