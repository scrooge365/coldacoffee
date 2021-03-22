/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { Root, Routes } from 'react-static';
import { ClassNames, css, Global, jsx, ThemeProvider } from '@emotion/react';
import AppContainer from '@sprinx/react-mui-layout/AppContainer';
import appTheme from './theme';
import AppLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import CalibriBold from './fonts/Calibri-bold.ttf';
import CalibriLight from './fonts/Calibri-light.ttf';
import CalibriRegular from './fonts/Calibri-regular.ttf';
import { IntlProvider } from 'react-intl';
import { messagesIntl } from './i18n';

export default function App() {
  const [locale, setLocale] = React.useState('cs');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocale(window.location.pathname.startsWith('/en') ? 'en' : 'cs');
    }
  }, []);

  return (
    <AppProvider>
      <ClassNames>
        {({ theme }) => (
          <>
            <Global
              styles={css`
                  *, html {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                  }

                  body {
                    @font-face {
                      font-family: Calibri;
                      font-style: normal;
                      font-weight: 500;
                      src: url:(${CalibriRegular});
                    }
                    color: ${theme.palette.text.primary};
                    font-family: ${theme.typography.fontFamily};
                    font-size: 1rem;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    background: ${theme.palette.background};

                    @font-face {
                      font-family: Calibri;
                      font-style: normal;
                      font-weight: 600;
                      src: url:(${CalibriBold});
                    }

                    @font-face {
                      font-family: Calibri;
                      font-style: normal;
                      font-weight: 400;
                      src: url:(${CalibriLight});
                    }
                  }
                `}
            />
            <IntlProvider locale={locale} messages={messagesIntl[locale]}>
              <div>
                <React.Suspense fallback={<Loader />}>
                  <AppLayout onChangeLocale={setLocale}>
                    <Routes />
                  </AppLayout>
                </React.Suspense>
              </div>
            </IntlProvider>
          </>
        )}
      </ClassNames>
    </AppProvider>
  );
}

const AppProvider = ({ children }) => {
  return (
    <AppContainer
      defaultTitle={'Colda coffee company'}
      RootComponent={Root}
      ErrorComponent={() => <h1>Something went wrong.</h1>}
    >
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </AppContainer>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
