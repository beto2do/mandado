import { ThemeProvider } from "@mui/material/styles";
import globalTheme from "@/theme/globalTheme";

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
}
