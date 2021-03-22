/** @jsx jsx */
import { jsx } from '@emotion/react';
import MainLayoutFooter from './components/MainLayoutFooter';
import MainLayoutHeader from './components/MainLayoutHeader';
import PropTypes from 'prop-types';

const MainLayout = ({ children, onChangeLocale: handleChangeLocale }) => {
  return (
    <div css={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '100vh' }}>
      <MainLayoutHeader onChangeLocale={handleChangeLocale} />
      <main
        css={(theme) => ({
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'flex-start',
          paddingTop: theme.spacing(9),
        })}
      >
        {children}
      </main>
      <MainLayoutFooter />
    </div>
  );
};

MainLayout.displayName = 'MainLayout';
export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onChangeLocale: PropTypes.func.isRequired,
};
