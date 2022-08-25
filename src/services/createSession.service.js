import users from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import "dotenv/config";

const createSessionService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Invalid e-mail or password");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid e-mail or password");
  }

  const token = jwt.sign(
    {
      email: user.email,
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: user.uuid,
    }
  );

  return token;
};

export default createSessionService;
