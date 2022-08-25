import jwt from "jsonwebtoken";
import "dotenv/config";

const authenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "You don't have permission" });
    }

    if (!decoded.isAdm) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.userId = decoded.sub;
    req.userEmail = decoded.email;
    next();
  });
};

export default authenticationMiddleware;
