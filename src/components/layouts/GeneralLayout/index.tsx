'use client';
import type { GeneralProps } from '@/types/ui';

type GeneralLayoutProps = {} & GeneralProps;

const GeneralLayout = (props: GeneralLayoutProps) => {
  return <>{props.children}</>;
};

export default GeneralLayout;
