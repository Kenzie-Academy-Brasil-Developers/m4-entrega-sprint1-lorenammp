import userProfileService from "../services/userProfile.service";

const userProfileController = (req, res) => {
  const email = req.email;

  const user = userProfileService(email);

  return res.json(user);
};

export default userProfileController;
