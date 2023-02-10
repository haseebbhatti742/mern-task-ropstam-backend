const mongoose = require("mongoose");
const { toJSON, paginate } = require("../../models/plugins");

const CategorySchema = mongoose.Schema(
  {
    //common fields
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
CategorySchema.plugin(toJSON);
CategorySchema.plugin(paginate);

/**
 * @typedef Category
 */
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
