// import React from 'react';
import PropTypes from 'prop-types';
import compMessages from '@sprinx/react-mui-components/i18n/en';
import fieldsMessages from '@sprinx/react-mui-fields/i18n/en';
import formMessages from '@sprinx/react-forms/i18n/cs';
import formsMessages from '@sprinx/react-forms/i18n/en';
import pagesMessages from '@sprinx/react-mui-pages/i18n/en';
import messages from './i18n/cs';

function MessagesEn({ children }) {
  return children([
    { cs: compMessages.en },
    { cs: fieldsMessages.en },
    { cs: formsMessages.en },
    { cs: pagesMessages.en },
    formMessages,
    messages,
  ]);
}

MessagesEn.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MessagesEn;
