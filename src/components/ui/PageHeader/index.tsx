'use client';
import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';
import BackHeader from '../BackHeader';
import Text from '../Text';

type PageHeaderProps = {
  overrideBack?: (e: React.MouseEvent<HTMLDivElement>) => unknown;
  title?: string;
} & GeneralProps;

const PageHeader = (props: PageHeaderProps) => {
  return (
    <BackHeader
      className={cn('flex items-center h-full bg-ui-bg-white relative px-4', props.className)}
    >
      <Text className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-base font-500">
        {props.title}
      </Text>
    </BackHeader>
  );
};

export default PageHeader;
