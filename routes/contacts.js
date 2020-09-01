const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc GET all user contacts
//@access Private

router.get("/", (req, res) => {
  res.send("Get All Contacts");
});

//@route POST api/contacts
//@desc Post user contacts
//@access Private

router.post("/", (req, res) => {
  res.send("Add user contact");
});

//@route PUT api/contacts/:id
//@desc Put user contacts
//@access Private

router.put("/:id", (req, res) => {
  res.send("Update user Contact");
});

//@route DELETE api/contacts/:id
//@desc Delete user contacts
//@access Private

router.delete("/:id", (req, res) => {
  res.send("Delete A User contact");
});

module.exports = router;
