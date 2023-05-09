import express from "express";
const router = express.Router();

import { createContact , getAllContacts, deleteContact, updateContact} from "../controllers/contactController.js";
router.route('/').post(createContact).get(getAllContacts);
router.route('/:id').delete(deleteContact).patch(updateContact);
export default router;