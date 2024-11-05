import User from "./user";

export default interface UserState{
    users: User[];
    addUser: (user: User) => void;
    deleteUser: (id: number) => void;
    updateUser: (user: User) => void;
    loadUsers: () => void
  }

