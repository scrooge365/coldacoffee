import messagesCS from './cs';
import messagesEN from './en';
import lo from 'lodash';

const messages = lo.merge({}, messagesCS, messagesEN);

export default messages;
