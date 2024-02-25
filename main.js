const express = require('express');
require('dotenv').config();
async function main() {
    const app = express();
    app.use(express.json());
    const port = process.env.PORT;
    require("./src/config/mongo")
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
