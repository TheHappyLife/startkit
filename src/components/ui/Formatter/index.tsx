import type { GeneralProps } from '@/types/ui';
import cn from '@/utils/cn';

type FormatterProps = {
  value?: number;
} & GeneralProps;

const Formatter = ({ ref, ...props }: FormatterProps & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <div ref={ref} className={cn(props.className)}>
      {props.value}
    </div>
  );
};

Formatter.displayName = 'Formatter';

export default Formatter;
