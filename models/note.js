// Note model
// ==========

// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var noteSchema = new Schema({

horse: { type: String, required: true },
author: { type: String, required: true },
synopsis: String,
fullSynopsis: String,
date: { type: Date, default: Date.now },
track: String

});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
