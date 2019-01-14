import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const EMailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const PasswordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
