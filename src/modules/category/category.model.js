const { Schema, Types, model } = require("mongoose");
const { required } = require("nodemon/lib/config");
const CategorySchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    icon: { type: String, required: true },
    parent: { type: Types.ObjectId, ref: "Category", required: false },
    parents: { type: [Types.ObjectId], ref: "Category", required: false, default: [] },
}, { virtuals: true, versionKey: false, id: false })
CategorySchema.virtual("children", {
    ref: "Category",
    localField: "_id",
    foreignField: "parent"
});
const categoryModel = model("category", CategorySchema)
module.exports = categoryModel;