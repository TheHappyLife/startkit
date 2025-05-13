import { create } from "zustand";
import { UserStore, UserInfo } from "./type";
const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  userInfo: undefined,
  setIsLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
  setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
}));

export default useUserStore;
