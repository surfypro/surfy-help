import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";


const theme = createTheme();
export default function Root(props: { children }) {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}