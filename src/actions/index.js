import firebase from 'firebase';
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

export const LoginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
            });
    };
};
