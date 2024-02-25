const express = require('express');
const SwaggerConfig = require('./src/config/swaggare.config');
require('dotenv').config();
async function main() {
    const app = express();
    app.use(express.json());
    const port = process.env.PORT;
    require("./src/config/mongoose.config")
    SwaggerConfig(app)
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/`);
    });
}
main();