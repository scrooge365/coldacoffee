/** @jsx jsx */
import React from 'react';
import useRedirect from '@sprinx/react-routes/useRedirect';
import { jsx } from '@emotion/react';

export default () => {
  const setRedirect = useRedirect();
  React.useEffect(() => setRedirect('/cs'), []);
  return <div css={{ textAlign: 'center' }} />;
};
