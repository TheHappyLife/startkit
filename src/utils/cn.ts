import clsx from "clsx";
// import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cn = (...inputs: any[]) => {
  return clsx(inputs);
};

export default cn;
