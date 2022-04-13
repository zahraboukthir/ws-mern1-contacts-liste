const mongoose = require("mongoose");
const { Schema } = mongoose;

const cantactSchema = new Schema({
  Fullname: String,
  Email: { type: String, required: true, unique: true },
  PhoneNumber: Number,
  Birthdate: Number,
});
// const cantact =mongoose.model("cantact", cantactSchema);
// module.exports =cantact
module.exports = mongoose.model("contact", cantactSchema);
