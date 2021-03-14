import React from 'react';
import useRedirect from '@sprinx/react-routes/useRedirect';

export default () => {
  const setRedirect = useRedirect();
  React.useEffect(() => setRedirect('/cs'), []);
  return (
    <div style={{ textAlign: 'center' }} />
  );
};
