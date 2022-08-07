import users from "../database";

const listUsersService = () => {
  const newUserArray = [];

  users.forEach((user) => {
    const userObj = {
      name: user.name,
      email: user.email,
      createdOn: user.createdOn,
      updatedOn: user.updatedOn,
      uuid: user.uuid,
      isAdm: user.isAdm,
    };

    newUserArray.push(userObj);
  });

  return newUserArray;
};

export default listUsersService;
