const res = require("express/lib/response");
const BookModel = require("../models/bookModel");
const library = require("../models/libraryModel");
const LibraryModel = require("../models/libraryModel");
const StudentModel = require("../models/studentModel");

exports.bookCreate = async (req,res,next) => {
    console.log(req.body);
    const bookData = {
        name : req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        author: req.body.author,
        library: "62824d6467ec60948ce83004"
    }
    const bookCreate = await BookModel.create(bookData);
    if (bookCreate){
        res.redirect("/book/success")
    } else {
        res.redirect("/book/create")
    }
}


const createLibrary = async () => {
    const library = await LibraryModel.create({
        name : "Thư viện 1",
        manager: "Trung"
    })
    console.log(library);
}


exports.bookList = async (req,res) => {
    const books = await BookModel.find({library: req.query.id})
    res.render("listBook",{books : books})
} 

exports.bookDelete = async (req, res) => {
    try {
      const book = await BookModel.findOne({id: req.query.id});
      if(book) {
        await book.remove();
        res.json({status: 200, message: "delete success"});
      }
    } catch (err) {
      console.log(err)
    }
  }

exports.bookBorrow = async(req,res) =>{
    const bookBr = await BookModel.findOne({name:req.body.bookName});
    if(bookBr){
        console.log(bookBr);
        const borrowData = {
            studentName : req.body.studentName,
            studentId : req.body.studentId,
            bookName: req.body.bookName
        }
        const borrowCreate = await StudentModel.create(borrowData);
        console.log("3");
        if (borrowCreate){
            console.log(bookBr._id)
            bookBr.quantity = bookBr.quantity - 1;
            await bookBr.save();
            console.log("4");
            res.redirect("/book/success")
            console.log(bookBr);
        } else {
            res.redirect("/book/fail")
        }
    }
}