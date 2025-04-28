import cn from "@/utils/cn";
import { Checkbox, CheckboxProps } from "@mui/material";
interface CheckBoxComponentProps extends CheckboxProps {
  className?: string;
}

const CheckBoxComponent = (props: CheckBoxComponentProps) => {
  const { className, sx, ...rest } = props;

  return (
    <Checkbox
      className={cn("!p-0", className)}
      {...rest}
      sx={{
        color: "currentColor",
        ...sx,
      }}
    />
  );
};

export default CheckBoxComponent;
