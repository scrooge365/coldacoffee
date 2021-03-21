/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const bgOptions = {
  default: theme.palette.divider,
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
};

const ButtonLink = React.forwardRef(({ children, className, to = '/', color = 'primary' }, ref) => {
  return (
    <ClassNames>
      {({ cx, css }) => (
        <Link
          to={to}
          ref={ref}
          css={cx(
            css({
              '& > svg': {
                '@media(min-width: 425px)': {
                  height: 10,
                  width: 10,
                },
                '@media(min-width: 600px)': {
                  height: 12,
                  width: 12,
                },
                fill: theme.palette.common.white,
                height: 6,
                marginLeft: theme.spacing(0.5),
                width: 6,
              },
              '&:hover': {
                boxShadow: theme.shadows[6],
              },
              '@media(min-width: 425px)': { fontSize: 14 },
              '@media(min-width: 600px)': { fontSize: 16 },
              alignItems: 'center',
              background: bgOptions[color],
              borderRadius: 3,
              boxShadow: theme.shadows[3],
              color: color === 'default' ? theme.palette.text.primary : theme.palette.common.white,
              cursor: 'pointer',
              display: 'flex',
              fontSize: 10,
              justifyContent: 'center',
              padding: theme.spacing(0.5, 1.5),
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all .2s ease',
            }),
            className,
          )}
        >
          {children}
        </Link>
      )}
    </ClassNames>
  );
});

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  children: null,
  className: undefined,
  color: 'primary',
};

export default ButtonLink;
