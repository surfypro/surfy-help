import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { I18NHelpContext, SetupI18nContext } from '@site/surfy';
import { useCurrentLocale } from '../translations/translations';

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
        },
    },
});

export default function Root(props: { children: React.ReactNode }) {
    const { children } = props;
    const language = useCurrentLocale();

    return (
        <ThemeProvider theme={theme}>
            <SetupI18nContext defaultLanguage={language} I18nContext={I18NHelpContext} >
                {children}
            </SetupI18nContext>
        </ThemeProvider>
    );
}
