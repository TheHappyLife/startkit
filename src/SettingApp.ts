export const Settings = [
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

export const nameStore1 = Settings.find((setting) => setting.key === "key-app1")?.key as string;
export const nameStore2 = Settings.find((setting) => setting.key === "key-app2")?.key as string;
