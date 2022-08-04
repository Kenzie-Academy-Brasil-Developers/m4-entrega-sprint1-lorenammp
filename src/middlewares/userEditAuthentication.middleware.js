import jwt from "jsonwebtoken";
import users from "../database";

const userEditAuthenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  const id = req.params;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "1234", (error, decoded) => {
    console.log(req.headers.authorization);
    console.log(req.body);
    if (error) {
      return res.status(401).json({ message: "You don't have permission." });
    }

    const getUser = users.filter((u) => u.uuid === decoded.sub);
    console.log(getUser);

    if (!decoded.isAdm && id.id !== decoded.sub) {
      return res.status(401).json({ message: "You don't have permission." });
    }

    req.userId = id.id;

    next();
  });
};

export default userEditAuthenticationMiddleware;
