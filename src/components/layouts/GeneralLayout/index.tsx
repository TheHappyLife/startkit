"use client";
import { GeneralProps } from "@/types/ui";
import { TekWalletProvider } from "tek-wallet";
import "swiper/css";
interface GeneralLayoutProps extends GeneralProps {}

const GeneralLayout = (props: GeneralLayoutProps) => {
  return <TekWalletProvider>{props.children}</TekWalletProvider>;
};

export default GeneralLayout;
