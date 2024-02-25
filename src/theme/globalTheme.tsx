"use client";
import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

const globalTheme = createTheme({
  palette: {
    background: {
      paper: "#fafaf9",
      default: "#fafaf9",
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
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

export default globalTheme;
