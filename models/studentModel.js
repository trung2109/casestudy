const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    studentName: String,
    studentId: String,
    bookName: String
});
const student = mongoose.model("Student",StudentSchema); 
module.exports = student;