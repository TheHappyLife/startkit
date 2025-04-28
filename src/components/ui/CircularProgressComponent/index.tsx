import cn from "@/utils/cn";
import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressProps } from "@mui/material/CircularProgress";
interface CircularProgressComponentProps extends CircularProgressProps {}

const CircularProgressComponent = (props: CircularProgressComponentProps) => {
  const { className, ...rest } = props;

  return <CircularProgress className={cn("", className)} {...rest} />;
};

export default CircularProgressComponent;
