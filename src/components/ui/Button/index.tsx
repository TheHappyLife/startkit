import cn from "@/utils/cn";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export enum BUTTON_STATUS {
  LOADING = "loading",
  DISABLED = "disabled",
  ENABLED = "enabled",
}

export interface ButtonProps extends MuiButtonProps {
  className?: string;
  status?: BUTTON_STATUS;
}

const Button = (props: ButtonProps) => {
  const { className, sx, ...rest } = props;

  return (
    <MuiButton className={cn("", className)} sx={sx} {...rest}>
      {props.children}
    </MuiButton>
  );
};

Button.displayName = "Button";

export default Button;
