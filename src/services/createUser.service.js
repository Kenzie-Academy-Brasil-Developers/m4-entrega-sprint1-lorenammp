import users from "../database";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

const createUserService = async (email, name, password, isAdm) => {
  const todayDate = new Date();

  const newUser = {
    name,
    email,
    createdOn: todayDate,
    updatedOn: todayDate,
    uuid: uuidv4(),
    isAdm,
    password,
  };

  const hashedPassword = await hash(newUser.password, 10);
  newUser.password = hashedPassword;

  users.push(newUser);

  const finalUser = { ...newUser };

  delete finalUser.password;

  return finalUser;
};

export default createUserService;
