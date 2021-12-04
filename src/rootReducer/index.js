import {combineReducers} from 'redux';
import appReducer from './appReducer';
import loginData from '../pages/login/reducer';
import traders from '../pages/traders/reducer';

const rootReducer = combineReducers({
    appReducer,
    traders,
    loginData,
});

export default rootReducer;