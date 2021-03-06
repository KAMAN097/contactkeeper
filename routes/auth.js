const express = require("express");
const router = express.Router();

//@route GET api/auth
//@desc GET logged in user
//@access Private
router.get("/", (req, res) => {
  res.send("Get Logged In User");
});

//@route GET api/auth
//@desc Auth user & get token
//@access Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
