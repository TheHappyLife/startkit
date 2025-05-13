"use client";
import { GeneralProps } from "@/types/ui.general.type";
import { SessionProvider } from "next-auth/react";
interface GeneralLayoutProps extends GeneralProps {}

const GeneralLayout = (props: GeneralLayoutProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default GeneralLayout;
