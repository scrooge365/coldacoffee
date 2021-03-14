// import React from 'react';
import PropTypes from 'prop-types';
import compMessages from '@sprinx/react-mui-components/i18n/en';
import fieldMessages from '@sprinx/react-mui-fields/i18n/en';
import formsMessages from '@sprinx/react-forms/i18n/en';
import pagesMessages from '@sprinx/react-mui-pages/i18n/en';
import messages from './i18n/en';

function MessagesEn({ children }) {
  return children([compMessages, fieldMessages, formsMessages, pagesMessages, messages]);
}

MessagesEn.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MessagesEn;
