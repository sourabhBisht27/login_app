const VALID_CREDENTIALS = {
  username: "admin",
  password: "admin",
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (
    username === VALID_CREDENTIALS.username &&
    password === VALID_CREDENTIALS.password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username,
        role: "admin",
        loginTime: new Date().toISOString(),
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password. Please try again.",
  });
};

module.exports = { login };
