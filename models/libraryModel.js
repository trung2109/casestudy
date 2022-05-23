const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LibrarySchema = new Schema({
    name : String,
    manager : String
})
const library = mongoose.model("library", LibrarySchema);
module.exports = library;