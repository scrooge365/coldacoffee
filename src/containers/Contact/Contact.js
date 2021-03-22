/** @jsx jsx */
import { jsx } from '@emotion/react';
import Page from '../../components/Page';
import ErrorPage from '../../pages/404';
import PropTypes from 'prop-types';

const Contact = ({ error }) => {
  if (error) return <ErrorPage error={error} />;

  return (
    <Page
      pageTitle={'Kolda coffee company'}
      css={(theme) => ({
        '& > div': { alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' },
        width: '100%',
        padding: theme.spacing(0, 1),
      })}
    >
      Contact
    </Page>
  );
};

export default Contact;

Contact.propTypes = {
  error: PropTypes.any, // eslint-disable-line
};

Contact.defaultProps = {};
