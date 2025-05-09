'use client';
import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';

type DefaultPageLayoutProps = {} & GeneralProps;

const DefaultPageLayout = (props: DefaultPageLayoutProps) => {
  return <div className={cn('p-4', props.className)}>{props.children}</div>;
};

export default DefaultPageLayout;
