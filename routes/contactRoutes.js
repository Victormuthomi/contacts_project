const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

//use validate token
router.use(validateToken);
//The route to get all the contacts and create a contact
router.route("/").get(getContacts).post(createContact);

//The route to get a specific contact, update and delete
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
