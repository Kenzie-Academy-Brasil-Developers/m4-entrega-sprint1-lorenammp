import users from "../database";

const updateUserService = (id, newData) => {
  if ("isAdm" in newData) {
    delete newData.isAdm;
  }

  const userIndex = users.findIndex((user) => user.uuid == id);

  if (userIndex === -1) {
    return "User not found";
  }

  const todayDate = new Date();
  newData.updatedOn = todayDate;

  users[userIndex] = { ...users[userIndex], ...newData };
  const updatedData = { ...users[userIndex] };
  delete updatedData.password;

  return updatedData;
};

export default updateUserService;
