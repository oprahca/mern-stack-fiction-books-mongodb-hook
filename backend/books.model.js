const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const booksSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    published: { type: Number, required: true }
},{ timestamps: true })

const FictionBooks = mongoose.model('FictionBooks',booksSchema);
module.exports = FictionBooks;