import * as React from "react";
import Popover, { PopoverProps } from "@mui/material/Popover";
import { Box } from "@mui/material";

interface CustomTooltipProps extends Omit<PopoverProps, "open"> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface CustomTooltipRef {
  open: React.ReactEventHandler;
  close: React.ReactEventHandler;
}

const CustomTooltip = React.forwardRef<CustomTooltipRef, CustomTooltipProps>(
  (
    {
      trigger,
      children,
      disabled,
      anchorOrigin = {
        vertical: "bottom",
        horizontal: "center",
      },
      anchorPosition,
      transformOrigin,
      ...rest
    },
    ref
  ) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const handleOpen: React.MouseEventHandler<HTMLDivElement> = (event) => {
      if (disabled) return;
      setAnchorEl(event.currentTarget);
    };

    const handleClose: React.ReactEventHandler<HTMLDivElement> = () => {
      setAnchorEl(null);
    };

    React.useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));

    const cancelPropagation: React.ReactEventHandler = (event) => {
      event.stopPropagation();
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <Box onClick={cancelPropagation} sx={{ display: "inline-block" }}>
        <Box
          component={"div"}
          aria-describedby={id}
          onClick={handleOpen}
          sx={{ textAlign: "left" }}
        >
          {trigger}
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={anchorOrigin}
          anchorPosition={anchorPosition}
          transformOrigin={transformOrigin}
          sx={{
            "& .MuiPopover-paper": {
              backgroundColor: "transparent",
              borderRadius: "0.75rem",
            },
          }}
          {...rest}
        >
          {children}
        </Popover>
      </Box>
    );
  }
);

CustomTooltip.displayName = "CustomTooltip";

export default CustomTooltip;
