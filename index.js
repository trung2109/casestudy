const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = 3000;

const DB_URL = `mongodb://hatrinhtrung:123456@127.0.0.1:27017/casestudy`;

const db = mongoose.connection;

app.set("view engine", "ejs");
app.set("views", "./views");

mongoose.connect(DB_URL, {useNewUrlParser : true}).then(()=>console.log("DB connected"));
db.on("err", (err)=>{
    console.log("DB connection error",err.message);
})

const bookRouter = require('./routes/bookRouter');
app.use('/book', bookRouter);

const libraryRouter = require('./routes/libraryRouter');
app.use('/library', libraryRouter);

app.listen(PORT, () => {
    console.log("PORT ",PORT);
})