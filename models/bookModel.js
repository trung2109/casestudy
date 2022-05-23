const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name : String,
    price: String,
    quantity: Number,
    author: String,
    library: {
        type: Schema.Types.ObjectId,
        ref: "library"
    }
});
const book = mongoose.model("book",BookSchema); 
module.exports = book;