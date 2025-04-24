import cn from "@/utils/cn";
import styles from "./index.module.css";
import Link from "next/link";
import { GeneralProps } from "@/types/ui";
import { useMemo } from "react";
interface CustomLinkProps extends GeneralProps {
  className?: string;
  href?: string;
  disabled?: boolean;
}

const CustomLink = (props: CustomLinkProps) => {
  const Component = useMemo(() => {
    if (props.disabled || !props.href) return "button";

    return Link;
  }, [props.disabled, props.href]);

  return (
    <Component
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(styles.container, props.disabled && "pointer-events-none", props.className)}
      href={props.href as string}
    >
      {props.children}
    </Component>
  );
};

export default CustomLink;
