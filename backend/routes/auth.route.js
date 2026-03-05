const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");
const { validateLoginInput } = require("../middleware/validation");

router.post("/login", validateLoginInput, login);

module.exports = router;
