import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";


const theme = createTheme({
    typography: {
        fontFamily: `var(--ifm-font-family-base)`,
        h1: {
            fontFamily: `var(--ifm-heading-font-family)`,
        },
        h2: {
            fontFamily: `var(--ifm-heading-font-family)`,
        },
        h3: {
            fontFamily: `var(--ifm-heading-font-family)`,
        }
    }
});
export default function Root(props: { children }) {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}