import type { Theme } from "@mui/material";
import type { Components, CssVarsTheme } from "@mui/material/styles";

export const components:
  | Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>
  | undefined = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 600,
        textTransform: "none",
        padding: theme.spacing(1.25, 2),
        minHeight: 0,
        minWidth: 0,
        borderRadius: ".75rem",
      }),
      endIcon: ({ theme }) => ({
        marginLeft: theme.spacing(0.5),
      }),
    },
    defaultProps: {
      variant: "contained",
      color: "primary",
      loadingPosition: "center",
    },
    variants: [
      {
        props: { variant: "contained" },
        style: ({}) => ({}),
      },
      {
        props: { variant: "text" },
        style: ({}) => ({}),
      },

      {
        props: { disabled: true },
        style: ({}) => ({}),
      },
      {
        props: { loading: true, color: "primary" },
        style: () => ({}),
      },
      {
        props: { loading: true, color: "secondary" },
        style: () => ({}),
      },
      {
        props: { loading: true, variant: "outlined" },
        style: ({}) => ({}),
      },
    ],
  },
};
