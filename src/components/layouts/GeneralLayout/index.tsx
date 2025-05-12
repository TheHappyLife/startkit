"use client";
import { GeneralProps } from "@/types/ui";
interface GeneralLayoutProps extends GeneralProps {}

const GeneralLayout = (props: GeneralLayoutProps) => {
  return <>{props.children}</>;
};

export default GeneralLayout;
