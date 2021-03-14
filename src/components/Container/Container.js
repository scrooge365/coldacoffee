/** @jsx jsx */
// import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

function Container({ children }) {
  return <div css={{ maxWidth: 1300, width: '100%', alignSelf: 'center' }}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: undefined,
};

export default Container;
