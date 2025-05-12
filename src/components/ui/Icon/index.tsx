import { Box, BoxProps, SxProps } from "@mui/material";
import cn from "@/utils/cn";
export interface IconProps extends BoxProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  sx?: SxProps;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { src, alt, onClick, width, height, sx, className, ...rest } = props;

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onClick={onClick}
      className={cn(className)}
      {...rest}
      sx={{
        display: "block",
        width: (width ?? height ?? false) ? `${(width || height || 0) / 16}rem` : "auto",
        height: (height ?? width ?? false) ? `${(height || width || 0) / 16}rem` : "auto",
        ...sx,
      }}
    />
  );
};
export default Icon;
