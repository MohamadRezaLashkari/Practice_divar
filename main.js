const express = require('express');
const SwaggerConfig = require('./src/config/swaggare.config');
const mainRouter = require('./src/app.routes');
const NotFoundHandler = require('./src/common/exeption/not-found.handler');
const AllExceptionHandler = require('./src/common/exeption/all-exeption.handler');
require('dotenv').config();
async function main() {
    const app = express();
    app.use(express.json());
    const port = process.env.PORT;
    require("./src/config/mongoose.config")
    require("./src/config/mongoose.config")
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    SwaggerConfig(app)
    NotFoundHandler(app)
    AllExceptionHandler(app)
    app.use(mainRouter)
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/`);
    });
}
main();