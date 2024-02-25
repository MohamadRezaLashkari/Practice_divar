const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("mongodb Connected!");
}).catch((e) => {
    console.log(e?.message ?? "Failed to connection!");
})