/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../../images/logo.webp';

const MainLayoutHeader = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      {...props}
      css={(theme) => ({
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
      })}
    >
      <div
        css={{ width: '100%', maxWidth: 1300, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div css={{ width: 54, height: 54, display: 'flex', '& > img': { width: '100%', height: 'auto' } }}>
          <img src={logo} alt='logo' />
        </div>
        <HeaderHamburger open={open} onChange={() => setOpen((ps) => !ps)} />
      </div>
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
              height: theme.spacing(4),
              width: theme.spacing(4),
              // position: 'fixed',
              // top: 20,
              // right: 20,
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
