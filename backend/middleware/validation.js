const validateLoginInput = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || typeof username !== "string" || username.trim() === "") {
    return res
      .status(400)
      .json({ success: false, message: "Username is required." });
  }

  if (!password || typeof password !== "string" || password.trim() === "") {
    return res
      .status(400)
      .json({ success: false, message: "Password is required." });
  }

  req.body.username = username.trim();
  req.body.password = password.trim();
  next();
};

module.exports = { validateLoginInput };
