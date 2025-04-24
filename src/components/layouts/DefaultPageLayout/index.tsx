"use client";
import { GeneralProps } from "@/types/ui";
import cn from "@/utils/cn";
interface DefaultPageLayoutProps extends GeneralProps {}

const DefaultPageLayout = (props: DefaultPageLayoutProps) => {
  return <div className={cn("p-4", props.className)}>{props.children}</div>;
};

export default DefaultPageLayout;
