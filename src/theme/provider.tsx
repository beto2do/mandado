"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const globalTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace",
    ].join(","),
  },
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
}
