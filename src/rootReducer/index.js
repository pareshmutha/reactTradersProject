import {combineReducers} from 'redux';
import appReducer from './appReducer';
import allCustomers from '../pages/home/reducer';
import loginData from '../pages/login/reducer';

const rootReducer = combineReducers({
    appReducer,
    allCustomers,
    loginData,
});

export default rootReducer;