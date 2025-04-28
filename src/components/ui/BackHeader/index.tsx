"use client";
import cn from "@/utils/cn";
import { GeneralProps, UnknownFunction } from "@/types/ui";
import BackArrow from "../BackArrow";
import useCustomRouter from "@/hooks/useCustomRouter";

interface BackHeaderProps extends GeneralProps {
  overrideBack?: (e: React.MouseEvent<HTMLDivElement>) => void;
  center?: React.ReactNode;
  hideBack?: boolean;
}

const BackHeader = (props: BackHeaderProps) => {
  const router = useCustomRouter();
  const { center, children, className, hideBack } = props;
  const back = (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.overrideBack) {
      props.overrideBack(e);

      return;
    }
    router.back();
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-ui-horizontal-3 h-full bg-ui-bg-white relative",
        className
      )}
    >
      {!hideBack && <BackArrow onClick={back as UnknownFunction} />}
      {!!center && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{center}</div>
      )}
      {children}
    </div>
  );
};

export default BackHeader;
