import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGE, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions/types.js';
const INITIAL_STATE = { 
    email: '' ,
    password: '', 
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload}
        case LOGIN_USER_FAILED:
            return {...state, error: 'Authentication failed', password: '', loading: false}
        case LOGIN_USER:
            return {...state, error:'', loading: true}
        default: 
            return state;
    }
};