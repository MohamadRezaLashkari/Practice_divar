const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { SwaggerTheme } = require('swagger-themes');
function SwaggerConfig(app) {
    const theme = new SwaggerTheme();
    const darkStyle = theme.getBuffer('dark');
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.0",
            info: {
                title: "divar-backend",
                description: "practice node project Divar",
                version: "1.0.0"
            }
        },
        apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
    })
    const swagger = swaggerUi.setup(swaggerDocument, { customCss: theme.getBuffer('dark') });
    app.use("/", swaggerUi.serve, swagger)
}
module.exports = SwaggerConfig;
