import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;

  const user = await createUserService(email, name, password, isAdm);

  return res.status(201).json(user);
};

export default createUserController;
