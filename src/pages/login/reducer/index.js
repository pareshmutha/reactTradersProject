import { combineReducers } from 'redux';

const usersData = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_DATA':
            return action.payload;
        default:
            return state;
    }
};

const OTP = (state = false, action) => {
    switch (action.type) {
        case 'OTP':
            return action.payload;
        default:
            return state;
    }
};

const loginData = combineReducers({
    usersData,
    OTP,
});

export default loginData;