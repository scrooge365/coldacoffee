import messagesCS from './cs';
import messagesEN from './en';

export const messages = { cs: messagesCS.cs, en: messagesEN.en };
export const messagesIntl = { ...messagesEN, ...messagesCS };
