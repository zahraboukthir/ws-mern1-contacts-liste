const Contact = require("../Models/contact");

const addcantact = async (req, res) => {
  try {
    const newrecord = new Contact(req.body);
    const founded = await Contact.findOne({ Email: req.body.Email });
    console.log(founded);
    if (founded) {
      return res.status(400).send("email already exist");
    }
    await newrecord.save();
    res.status(200).send({ newrecord, msg: "contact added" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("could not  add contact");
  }
};
const getcontact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);

    res.status(200).send(contacts);
  } catch (error) {
    console.log(error);
    return res.status(500).send("contacts not found");
  }
};
const getonecontact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    console.log(contact);

    res.status(200).send(contact);
  } catch (error) {
    console.log(error);
    return res.status(500).send("contact not found");
  }
};
const updatecontact = async (req, res) => {
  try {
    //set to catch the changement
    const { id } = req.params;
    const contacts = await Contact.findByIdAndUpdate(id, { $set: req.body });

    res.status(200).send(contacts);
  } catch (error) {
    console.log(error);
    return res.status(500).send("could not update");
  }
};
const deletecontact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedcontact = await Contact.findByIdAndDelete(id);

    res.status(200).send("contact is deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).send("could not update");
  }
};
module.exports = {
  addcantact,
  getcontact,
  updatecontact,
  deletecontact,
  getonecontact,
};
