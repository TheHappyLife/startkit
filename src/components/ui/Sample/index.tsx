import cn from "@/utils/cn";
import styles from "./index.module.css";
interface SampleProps {
  className?: string;
}

const Sample = (props: SampleProps) => {
  return <div className={cn(styles.container, "", props.className)}>Sample UI Component</div>;
};

export default Sample;
