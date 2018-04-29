const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  fullSynopsis: String,
  date: { type: Date, default: Date.now },
  track: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
