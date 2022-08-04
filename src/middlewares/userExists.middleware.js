import users from "../database";

const userExists = (req, res, next) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (user) {
    req.user = user;
    next();
  }

  return res.status(404).json({ message: "User not found" });
};
