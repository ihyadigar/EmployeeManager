import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
        //'{ }' ile yeni bir nesne oluşturup state içerisindeki 'email' alanı override ediliyor.
        //Bu sayede state nesnesinin değiştiği component'e bildirilip rerender etmesi sağlanıyor:
            return { ...state, email: action.payload };
        default:
            return state;
    }
};
