import axios from "axios";

let currentAccessToken = "";

const userClientRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

// set auth token when login
export const setAuthToken = (token: string) => {
  currentAccessToken = token;
};

userClientRequest.interceptors.request.use(
  (config) => {
    if (currentAccessToken) {
      config.headers.Authorization = `Bearer ${currentAccessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userClientRequest;
