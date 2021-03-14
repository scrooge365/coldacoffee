import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ breadcrumbs = undefined, children, className, pageTitle, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {breadcrumbs}
      <div>{children}</div>
    </div>
  );
};

Page.displayName = 'Page';

export default Page;

Page.propTypes = {
  breadcrumbs: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pageTitle: PropTypes.node,
};

Page.defaultProps = {
  breadcrumbs: undefined,
  className: undefined,
  pageTitle: undefined,
};
