const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PainterSchema = new Schema({
  
  name: { type: String, required: true },
  portrait: { type: String, required: true },
  country: { type: String, required: true },
  life: { type: String, required: true }
},
{ timestamps: true }
);

const Painter = mongoose.model("painter", PainterSchema);

module.exports = Painter;