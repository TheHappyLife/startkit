import cn from "@/utils/cn";
import styles from "./index.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressProps } from "@mui/material/CircularProgress";
interface CircularProgressComponentProps extends CircularProgressProps {}

const CircularProgressComponent = (props: CircularProgressComponentProps) => {
  const { className, ...rest } = props;

  return <CircularProgress className={cn(styles.container, "", className)} {...rest} />;
};

export default CircularProgressComponent;
