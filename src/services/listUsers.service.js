import users from "../database";

const listUsersService = () => {
  const showUsers = [...users];

  showUsers.forEach((user) => {
    delete user.password;
  });

  return showUsers;
};

export default listUsersService;
