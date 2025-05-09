import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';
import Link from 'next/link';
import { useMemo } from 'react';

type CustomLinkProps = {
  className?: string;
  href?: string;
  disabled?: boolean;
} & GeneralProps;

const CustomLink = (props: CustomLinkProps) => {
  const Component = useMemo(() => {
    if (props.disabled || !props.href) return 'button';

    return Link;
  }, [props.disabled, props.href]);

  return (
    <Component
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(props.disabled && 'pointer-events-none', props.className)}
      href={props.href as string}
    >
      {props.children}
    </Component>
  );
};

export default CustomLink;
