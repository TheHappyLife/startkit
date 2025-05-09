'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MuiThemeProvider;
