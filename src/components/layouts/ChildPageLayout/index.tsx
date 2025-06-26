import cn from "@/utils/cn";
import { forwardRef } from "react";
import { Box } from "@mui/material";
import { GeneralProps } from "@/types/ui.general.type";

interface ChildPageLayoutProps extends GeneralProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: {
    footer?: string;
    header?: string;
    body?: string;
  };
}

export interface ChildPageLayoutRef {
  scrollToTop: (position: number) => void;
}

const ChildPageLayout = forwardRef<ChildPageLayoutRef, ChildPageLayoutProps>(
  (props: ChildPageLayoutProps, ref) => {
    const { header, footer, children, classNames, className } = props;

    return (
      <Box ref={ref} className={cn("h-full w-full grid grid-rows-[auto_1fr_auto]", className)}>
        <Box className={cn("w-full", classNames?.header)}>{header}</Box>
        <Box className={cn("h-full w-full overflow-x-hidden overflow-y-auto", classNames?.body)}>
          {children}
        </Box>
        <Box className={cn("w-full", classNames?.footer)}>{footer}</Box>
      </Box>
    );
  }
);

ChildPageLayout.displayName = "ChildPageLayout";

export default ChildPageLayout;
