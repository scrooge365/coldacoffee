/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../../images/logo.webp';
import { Link, useLocation } from 'react-router-dom';
import CzechFlag from '../../../icons/CzechFlag';
import EnglishFlag from '../../../icons/EnglishFlag';
import { Tooltip } from '@material-ui/core';
import { useIntl } from 'react-intl';

const MainLayoutHeader = () => {
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);

  return (
    <div
      css={(theme) => ({
        '@media(min-width: 960px)': {
          padding: theme.spacing(0, 2),
        },
        display: 'flex',
        flexBasis: '100%',
        flexGrow: 1,
        flexShrink: 0,
        height: theme.spacing(9),
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,.9)',
        padding: theme.spacing(0, 1),
      })}
    >
      <div
        css={{ width: '100%', maxWidth: 1300, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Link
          css={(theme) => ({
            '& > img': {
              '@media(min-width: 600px)': {
                width: 54,
                height: 54,
              },
              width: 48,
              height: 48,
              marginRight: theme.spacing(1),
            },
            color: theme.palette.text.primary,
            fontSize: 22,
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
          })}
          to={intl.formatMessage({ id: 'paths.homepage', defaultMessage: '/en' })}
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt='logo' />
          Kolda coffee
        </Link>
        <HeaderHamburger open={open} onChange={() => setOpen((ps) => !ps)} />
      </div>
      <MainLayoutHeaderNavigation open={open} onClose={setOpen} />
    </div>
  );
};

MainLayoutHeader.displayName = 'MainLayoutHeader';

export default MainLayoutHeader;

const HeaderHamburger = ({ onChange: handleChange, open }) => {
  return (
    <ClassNames>
      {({ cx, css, theme }) => (
        <button
          type='button'
          aria-label='hamburger'
          onClick={handleChange}
          className={cx(
            css({
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: theme.spacing(4),
              width: theme.spacing(4),
              zIndex: 12,
              outline: 'none',
              '&:hover span': {
                backgroundColor: 'transparent',
              },
              '&:hover span::after': {
                top: open ? 0 : 6,
              },
              '&:hover span::before': {
                top: open ? 0 : '-6px',
              },
            }),
          )}
        >
          <span
            css={() => ({
              position: 'relative',
              background: 'transparent',
              '&, &::before, &::after': {
                width: 30,
                height: 3,
                display: 'inline-block',
              },
              '&::before, &::after': {
                backgroundColor: '#000',
                content: '""',
                position: 'absolute',
                left: 0,
                transition: 'all .2s',
              },
              '&::before': {
                top: open ? '0px' : '-4px',
                transform: open ? 'rotate(135deg)' : 'none',
              },
              '&::after': {
                top: open ? '0px' : '4px',
                transform: open ? 'rotate(-135deg)' : 'none',
              },
            })}
          />
        </button>
      )}
    </ClassNames>
  );
};

HeaderHamburger.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
};
HeaderHamburger.defaultProps = {
  onChange: undefined,
  open: false,
};

const MainLayoutHeaderNavigation = ({ open, onClose: handleClose }) => {
  const location = useLocation();
  const intl = useIntl();

  return (
    <div
      css={(theme) => ({
        '& > a': {
          '&:link, &:visited': {
            display: 'inline-block',
            fontSize: 30,
            padding: '10px 20px',
            color: '#fff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            backgroundImage: 'linear-gradient(120deg, transparent 0%, transparent 52%, #fff 50%)',
            backgroundSize: '240%',
            transition: 'all 0.4s',
            '@media (max-width: 800px)': {
              fontSize: 20,
            },
          },
          '&:hover, &:active': {
            backgroundPosition: '100%',
            color: theme.palette.text.primary,
            transform: 'translateX(1rem)',
          },
        },
        display: 'flex',
        width: open ? '100%' : 0,
        background: theme.palette.header.navigation,
        position: 'fixed',
        top: 72,
        left: 0,
        bottom: 0,
        transition: 'all .2s ease',
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
      })}
    >
      <div
        css={(theme) => ({
          margin: theme.spacing(4, 0),
          display: 'flex',
          alignItems: 'center',
          '& > a': {
            margin: theme.spacing(0, 2),
            color: theme.palette.common.white,
            fontSize: 24,
            textDecoration: 'none',
          },
          '& svg': {
            width: 24,
            height: 24,
          },
        })}
      >
        {!location.pathname.startsWith('/cs') && (
          <Tooltip title={intl.formatMessage({ id: 'header.cs', defaultMessage: 'Czech' })}>
            <Link to='/cs' onClick={() => handleClose(false)}>
              <CzechFlag />
            </Link>
          </Tooltip>
        )}
        {!location.pathname.startsWith('/en') && (
          <Tooltip title={intl.formatMessage({ id: 'header.en', defaultMessage: 'English' })}>
            <Link to='/en' onClick={() => handleClose(false)}>
              <EnglishFlag />
            </Link>
          </Tooltip>
        )}
      </div>
      <Link
        to={intl.formatMessage({ id: 'paths.homepage', defaultMessage: '/en/homepage' })}
        onClick={() => handleClose(false)}
      >
        Homepage
      </Link>
      <Link
        to={intl.formatMessage({ id: 'paths.contact', defaultMessage: '/en/contact' })}
        onClick={() => handleClose(false)}
      >
        Contact
      </Link>
    </div>
  );
};

MainLayoutHeaderNavigation.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};
MainLayoutHeaderNavigation.defaultProps = {
  open: false,
};
