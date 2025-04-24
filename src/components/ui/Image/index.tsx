import cn from "@/utils/cn";
import styles from "./index.module.css";
import { GeneralProps } from "@/types/ui";
interface ImageProps extends GeneralProps {
  className?: string;
  src?: string;
  alt?: string;
}

const Image = (props: ImageProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      onClick={props.onClick}
      className={cn(styles.container, "block", props.className)}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Image;
