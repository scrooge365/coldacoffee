import React from 'react';
import PropTypes from 'prop-types';
import GlobalizeProvider from '@sprinx/react-globalize/GlobalizeProvider';
import { useLocation } from 'react-router-dom';

const CldrLocaleEn = React.lazy(() => import('@sprinx/react-globalize/CldrLocaleEn'));
const CldrLocaleCs = React.lazy(() => import('@sprinx/react-globalize/CldrLocaleCs'));
const MessagesEn = React.lazy(() => import('./MessagesEn'));
const MessagesCs = React.lazy(() => import('./MessagesCs'));

function AppGlobalize({ children, supportedLanguages }) {
  const location = useLocation();
  return (
    <GlobalizeProvider
      cldrs={{ cs: CldrLocaleCs, en: CldrLocaleEn }}
      messages={{ en: MessagesEn, cs: MessagesCs }}
      defaultLocale={location.pathname.startsWith('/en') ? 'en' : 'cs'}
      supportedLocales={supportedLanguages}
      dontResolveLocale
    >
      {children}
    </GlobalizeProvider>
  );
}

AppGlobalize.propTypes = {
  children: PropTypes.node.isRequired,
  supportedLanguages: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        code: PropTypes.string.isRequired,
      }),
    ]),
  ).isRequired,
};

AppGlobalize.defaultProps = {};

export default AppGlobalize;
