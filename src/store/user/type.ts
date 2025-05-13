// this is only example type for user state - let change it
export interface UserStore {
  isLoggedIn: boolean;
  userInfo?: UserInfo;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

export type UserInfo = {
  id: string;
  name: string;
  email: string;
};
