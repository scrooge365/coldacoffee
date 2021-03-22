import messagesCS from './cs';
import messagesEN from './en';
import lo from 'lodash';

export const messages = lo.merge({}, messagesCS, messagesEN);

export const messagesIntl = { ...messagesEN, ...messagesCS };
