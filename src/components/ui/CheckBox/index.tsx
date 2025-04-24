import cn from "@/utils/cn";
import styles from "./index.module.css";
import { Checkbox, CheckboxProps } from "@mui/material";
interface CheckBoxComponentProps extends CheckboxProps {
  className?: string;
}

const CheckBoxComponent = (props: CheckBoxComponentProps) => {
  const { className, sx, ...rest } = props;

  return (
    <Checkbox
      className={cn(styles.container, "!p-0", className)}
      {...rest}
      sx={{
        color: "currentColor",
        ...sx,
      }}
    />
  );
};

export default CheckBoxComponent;
