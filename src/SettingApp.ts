export const Settings = [
  {
    key: "key-main",
    url: "https://dogapi.dog/api/v2/breeds",
    link: "/",
  },
  {
    key: "key-app1",
    url: "https://dogapi.dog/api/v2/breeds",
    link: "/app-1",
  },
  {
    key: "key-app2",
    url: "https://dogapi.dog/api/v2/breeds?page[number]=2",
    link: "/app-2",
  },
];

export const mainStore = Settings.find((setting) => setting.key === "key-app1")?.key as string;
