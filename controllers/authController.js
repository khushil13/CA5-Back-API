const bcrypt = require('bcrypt');
const { users } = require('../utils/userStone');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    return res.json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = hashedPassword;

  res.json({ message: "User registered successfully" });
};

const welcomeUser = (req, res) => {
  const { username } = req.query;

  if (users[username]) {
    return res.json({ message: `Welcome, ${username}!` });
  }

  res.json({ message: "User not found" });
};

module.exports = {
  registerUser,
  welcomeUser
};
