import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import globalTheme from "@/theme/globalTheme";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
