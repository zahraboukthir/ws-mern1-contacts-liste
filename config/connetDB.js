const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("DB is Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;
