import users from "../database";

const userProfileService = (email) => {
  const getUser = users.find((user) => user.email === email);

  const myUser = { ...getUser };
  delete myUser.password;

  return myUser;
};

export default userProfileService;
