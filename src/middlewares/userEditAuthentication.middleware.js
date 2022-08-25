import jwt from "jsonwebtoken";
import "dotenv/config";

const userEditAuthenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  const id = req.params;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "You don't have permission." });
    }

    if (!decoded.isAdm && id.id !== decoded.sub) {
      return res.status(401).json({ message: "You don't have permission." });
    }

    req.userId = id.id;

    next();
  });
};

export default userEditAuthenticationMiddleware;
