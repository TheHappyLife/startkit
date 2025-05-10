import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { StoreApp1State } from "./type";
import { mainStoreApp1 } from "@/SettingApp";

export const useStoreApp = create<StoreApp1State>()(
  persist(
    (set) => ({
      dataMain: null,
      setDataMain: ({ message, status }: { message: string; status: string }) =>
        set({
          dataMain: {
            message,
            status,
          },
        }),
    }),
    {
      name: mainStoreApp1,
      storage: typeof window !== "undefined" ? createJSONStorage(() => localStorage) : undefined,
      // skipHydration: false,
    }
  ) as any
);
