'use client';
import type { GeneralProps, UnknownFunction } from '@/types/ui';
import useCustomRouter from '@/hooks/useCustomRouter';
import cn from '@/utils/cn';
import BackArrow from '../BackArrow';

type BackHeaderProps = {
  overrideBack?: (e: React.MouseEvent<HTMLDivElement>) => void;
  center?: React.ReactNode;
  hideBack?: boolean;
} & GeneralProps;

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
        'flex items-center gap-3 px-ui-horizontal-3 h-full bg-ui-bg-white relative',
        className,
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
