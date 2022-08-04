import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const updatedData = { ...req.body };
  const id = req.userId;

  const updatedUser = updateUserService(id, updatedData);

  return res.json(updatedUser);
};

export default updateUserController;
