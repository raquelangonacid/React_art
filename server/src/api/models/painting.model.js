const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaintingSchema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    year: { type: Number, required: true },
    author: { type: String, required: true },

  },
  { timestamps: true }
);

const Painting = mongoose.model("paintings", PaintingSchema);

module.exports = Painting;