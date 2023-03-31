import { useState } from "react";
import Axios from "../config";
import { useEffect } from "react";

const useUsers = () => {
  const [users, updateUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    Axios.get("users")
      .then((res) => {
        const usersData = res.data.users;
        updateUsers(usersData);
        setAllUsers(usersData);
      })
      .catch((err) => console.error(err));
  };

  const searchUser = (key) => {
    key = key.toLowerCase();
    const filteredUsers = allUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(key) ||
        user.lastName.toLowerCase().includes(key)
    );
    updateUsers(filteredUsers);
  };

  return {
    users,
    searchUser,
  };
};

export default useUsers;
