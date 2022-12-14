import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const id = req.userId;

  const deletedUser = deleteUserService(id);

  return res.status(200).json({ message: deletedUser });
};

export default deleteUserController;
