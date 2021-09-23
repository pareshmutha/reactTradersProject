import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';

// eslint-disable-next-line import/no-mutable-exports
let storeInstance = {};
/** Function to get current node env */
const getEnv = () => {
    if (typeof window === 'object' && process.env.NODE_ENV) {
        if (process.env.NODE_ENV.toLowerCase() === 'development') {
            return 'DEV';
        } else if (process.env.NODE_ENV.toLowerCase() === 'production') {
            return 'PROD';
        }
    }
    return '';
};
class ReduxStore {
    configureStore(initialState) {
        let composeEnhancers = compose;

        if (getEnv() === 'DEV') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        }

        storeInstance = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
        return storeInstance;
    }
}

export default new ReduxStore();