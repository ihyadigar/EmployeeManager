import { EMAIL_CHANGED } from './types';

export const EMailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
