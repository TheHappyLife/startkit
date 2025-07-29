import type { Palette } from "@mui/material";
import type { TypographyVariantsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sessionTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    sessionTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sessionTitle: true;
  }
}

export const typography:
  | TypographyVariantsOptions
  | ((palette: Palette) => TypographyVariantsOptions) = {
  fontFamily: '"Urbanist", Helvetica',
  fontSize: 16,
  sessionTitle: {
    fontSize: ".75rem",
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0rem",
    fontStyle: "normal",
  },
};
