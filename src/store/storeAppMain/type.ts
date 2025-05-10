export interface StoreApp1State {
  dataMain: {
    message: string;
    status: string;
  } | null;
  setDataMain: ({ message, status }: { message: string; status: string }) => void;
}
