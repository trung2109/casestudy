const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const LibraryModel = require("../models/libraryModel");

route.get("/list", async (req, res) => {
    const libraries = await LibraryModel.find();
    res.render("Library",{libraries:libraries});
});

module.exports = route;
