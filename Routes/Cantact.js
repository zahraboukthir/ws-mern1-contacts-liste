const express = require("express");
const {
  getonecontact,
  addcantact,
  getcontact,
  updatecontact,
  deletecontact,
} = require("../Controllers/cantact");
const Contact = require("../Models/contact");

const cantactrouter = express.Router();

cantactrouter.post("/addcontact", addcantact);
cantactrouter.get("/getcontact", getcontact);
cantactrouter.get("/onecontact/:id", getonecontact);
cantactrouter.put("/updatecontact/:id", updatecontact);
cantactrouter.delete("/deletecontact/:id", deletecontact);
module.exports = cantactrouter;
