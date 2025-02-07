import { ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import { SetupRecoilContext, versionCookieKeyName, appVersion, I18NHelpContext } from '@site/surfy';
import { useCurrentLocale } from "../components/Translations/translations";
import Cookies from 'js-cookie'

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

export default function Root(props: { children: React.ReactNode }) {
    const { children } = props;
    const language = useCurrentLocale();
    useEffect(() => {
        Cookies.set(versionCookieKeyName, appVersion);
    }, [appVersion]);
    return <ThemeProvider theme={theme}>
        <SetupRecoilContext defaultLanguage={language} I18nContext={I18NHelpContext}>
            {children}
        </SetupRecoilContext>
    </ThemeProvider>
}