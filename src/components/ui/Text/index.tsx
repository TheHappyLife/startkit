import cn from "@/utils/cn";
import styles from "./index.module.css";
import { GeneralProps } from "@/types/ui";
import { ElementType, forwardRef } from "react";
interface TextProps extends Omit<GeneralProps, "onClick">, React.HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  onClick?: GeneralProps["onClick"] | React.HTMLAttributes<HTMLElement>["onClick"];
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ tag, children, className, ...rest }: TextProps, ref) => {
    const Tag = tag || "span";

    return (
      <Tag ref={ref} className={cn(styles.container, "", className)} {...rest}>
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";
export default Text;
