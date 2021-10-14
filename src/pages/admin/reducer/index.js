import { combineReducers } from 'redux';


const allTraders = (state = [], action) => {
    switch (action.type) {
        case 'ALL_TRADERS':
            return action.payload;
        default:
            return state;
    }
};


const traders = combineReducers({
    allTraders,
});

export default traders;
