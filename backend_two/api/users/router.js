const express = require("express");
const router = express.Router();
const User = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
