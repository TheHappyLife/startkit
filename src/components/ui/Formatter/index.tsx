import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui.general.type";
import { forwardRef } from "react";
interface FormatterProps extends GeneralProps {
  value?: number;
}

const Formatter = forwardRef<HTMLDivElement, FormatterProps>((props: FormatterProps, ref) => {
  //add format logic

  return (
    <div ref={ref} className={cn(props.className)}>
      {props.value}
    </div>
  );
});

Formatter.displayName = "Formatter";

export default Formatter;
