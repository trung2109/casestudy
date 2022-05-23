const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const bookController = require("../controllers/bookController");
const BookModel = require("../models/bookModel");

route.get("/create", async (req, res) => {
    res.render("create");
});

route.post("/create",upload.none(), bookController.bookCreate)

route.get("/detail", async (req, res) => {
    const book = await BookModel.findOne();
    res.render("detail",{book:book});
});

route.delete('/delete', upload.none(), bookController.bookDelete);

route.get("/listBook",upload.none() ,bookController.bookList);

route.get("/success", (req, res) => {
    res.render("success");
});

route.get("/fail", (req, res) => {
    res.render("fail");
});

route.get("/borrow", (req,res) => {
    res.render("borrow");
})

route.post("/borrow",upload.none(), bookController.bookBorrow)

module.exports = route;