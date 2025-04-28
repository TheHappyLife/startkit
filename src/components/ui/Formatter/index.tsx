import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import { forwardRef } from "react";
interface FormatterProps extends GeneralProps {
  value?: number;
}

const Formatter = forwardRef<HTMLDivElement, FormatterProps>((props: FormatterProps, ref) => {
  return (
    <div ref={ref} className={cn(props.className)}>
      {props.value}
    </div>
  );
});

Formatter.displayName = "Formatter";

export default Formatter;
