import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";

interface ChildPageLayoutProps extends GeneralProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  fullScreen?: boolean;
}

const ChildPageLayout = (props: ChildPageLayoutProps) => {
  const { header, footer, fullScreen, children } = props;

  return (
    <div className={cn("h-full w-full", props.className)}>
      {header && <div className="h-[3.125rem] w-full absolute top-0 left-0 z-50">{header}</div>}
      <div
        className={cn(
          "h-full w-full overflow-x-hidden overflow-y-auto",
          header && !fullScreen && "pt-[3.125rem]"
        )}
      >
        {children}
      </div>
      {footer && <div className="h-12 w-full absolute bottom-0 left-0 z-50">{footer}</div>}
    </div>
  );
};

export default ChildPageLayout;
