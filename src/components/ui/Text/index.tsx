import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

type TextProps = {} & BoxProps;

const Text = ({ ref, children, sx, component, ...rest }: TextProps & { ref?: React.RefObject<HTMLElement | null> }) => {
  return (
    <Box component={component ?? 'span'} ref={ref} sx={sx} {...rest}>
      {children}
    </Box>
  );
};

Text.displayName = 'Text';
export default Text;
