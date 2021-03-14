import PropTypes from 'prop-types';
import React from 'react';

const PageHeadline = React.forwardRef(({ actions, children, className, ...rest }, ref) => {
  return (
    <div ref={ref} className={className} {...rest}>
      <h1>{children}</h1>
      {actions && <div>{actions}</div>}
    </div>
  );
});

PageHeadline.displayName = 'PageHeadline';
export default PageHeadline;

PageHeadline.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

PageHeadline.defaultProps = {
  actions: undefined,
  children: undefined,
  className: undefined,
};
