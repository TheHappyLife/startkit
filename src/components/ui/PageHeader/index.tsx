"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import BackHeader from "../BackHeader";
import Text from "../Text";

interface PageHeaderProps extends GeneralProps {
  overrideBack?: (e: React.MouseEvent<HTMLDivElement>) => unknown;
  title?: string;
}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <BackHeader
      className={cn("flex items-center h-full bg-ui-bg-white relative px-4", props.className)}
    >
      <Text className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-base font-500">
        {props.title}
      </Text>
    </BackHeader>
  );
};

export default PageHeader;
