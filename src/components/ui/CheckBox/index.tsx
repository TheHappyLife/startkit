import type { CheckboxProps } from '@mui/material';
import cn from '@/utils/cn';
import { Checkbox } from '@mui/material';

type CheckBoxComponentProps = {
  className?: string;
} & CheckboxProps;

const CheckBoxComponent = (props: CheckBoxComponentProps) => {
  const { className, sx, ...rest } = props;

  return (
    <Checkbox
      className={cn('!p-0', className)}
      {...rest}
      sx={{
        color: 'currentColor',
        ...sx,
      }}
    />
  );
};

export default CheckBoxComponent;
