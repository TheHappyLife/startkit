export type Icons = Record<string, string>;

export interface AssetsStore {
  icons?: Icons;
  setIcons: (icons: Icons) => void;
}
