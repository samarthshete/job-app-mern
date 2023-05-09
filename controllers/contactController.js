import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";
import NotFound from "../middleware/not-found.js";
import Contacts from "../models/Contacts.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/checkPermission.js";
const createContact = async (req, res) => {
  const { tag, firstName, lastName, phoneNumber, companyName, email } = req.body;

  if (!tag || !firstName || !lastName || !phoneNumber || !companyName || !email) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;

  const Contact = await Contacts.create(req.body);
  res.status(StatusCodes.CREATED).json({ Contact });
};
const getAllContacts = async (req, res) => {
  const Contact = await Contacts.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ Contact, totalContacts: Contact.length });
};
const deleteContact = async (req, res) => {
  const { id: contactId } = req.params;
  const Contact = await Contacts.findOne({ _id: contactId });
  if (!Contact) {
    throw new NotFoundError("No Contacts Found");
  }

  checkPermissions(req.user, Contact.createdBy);

  const deletedContact = await Contacts.findOneAndDelete({ _id: contactId });
  res.status(StatusCodes.OK).json({ msg: "Success! Conatct removed" });
};

const updateContact = async (req, res) => {
  res.send("updated");
};
export { createContact, getAllContacts, deleteContact, updateContact };
