
const initialState = {
    isLoading: false,
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'actionTypes.GET_APP_INFO':
            return Object.assign({}, state, action.payload, {errorMsg: action.error}, {formErrorMsg: action.formError});
        default:
            return state;
    }
};