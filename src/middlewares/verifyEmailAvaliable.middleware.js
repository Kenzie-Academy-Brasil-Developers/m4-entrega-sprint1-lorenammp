import users from "../database";

const verifyEmailAvaliable = (req, res, next) => {
  const { email } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res
      .status(400)
      .json({ message: "This email address is already being used." });
  }

  next();
};

export default verifyEmailAvaliable;
