import { forwardRef } from "react";
import { Typography, TypographyProps } from "@mui/material";
interface TextProps extends TypographyProps {}

const Text = forwardRef<HTMLElement, TextProps>(({ children, sx, ...rest }: TextProps, ref) => {
  return (
    <Typography ref={ref} sx={sx} {...rest}>
      {children}
    </Typography>
  );
});

Text.displayName = "Text";
export default Text;
