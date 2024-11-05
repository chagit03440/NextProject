import { create } from 'zustand';
import User from '../types/user';
import { getAllUsers } from '../services/userService';
import UserState from '../types/UserState';

const useUserStore = create<UserState>((set) => ({
  users: [], 

  addUser: (user: User) =>
    set((state) => ({
      users: [...state.users, user],
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user: User) => user.id !== id),
    })),

    updateUser: (updatedUser: User) =>
      set((state) => ({
        users: state.users.map((user: User) =>
          user.id === updatedUser.id ? updatedUser : user),
      })),
  

  loadUsers: async () => {
    const users = await getAllUsers();
    set({ users });
  },
}));

// Load users when the store is initialized
// useUserStore.getState().loadUsers();

export default useUserStore;
