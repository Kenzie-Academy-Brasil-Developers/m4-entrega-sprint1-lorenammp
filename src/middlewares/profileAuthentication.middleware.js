import jwt from "jsonwebtoken";

const profileAuthenticationMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "1234", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "You don't have permission." });
    }

    req.email = decoded.email;

    next();
  });
};

export default profileAuthenticationMiddleware;
