import { create } from "zustand";
import { AssetsStore, Icons } from "./type";
const useAssetsStore = create<AssetsStore>((set) => ({
  icons: undefined,
  setIcons: (icons: Icons) => set({ icons }),
}));

export default useAssetsStore;
