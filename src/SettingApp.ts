export const Settings = [
  {
    key: "key-main",
    url: "https://dogapi.dog/api/v2/breeds",
    link: "/",
  },
  {
    key: "key-app1",
    url: "https://dog.ceo/api/breeds/image/random",
    link: "/app-1",
  },
];

export const mainStoreApp1 = Settings.find((setting) => setting.key === "key-app1")?.key as string;
export const urlApp1 = Settings.find((setting) => setting.key === "key-app1")?.url as string;
