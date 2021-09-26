import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import redecer from './redecer';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    );

const  store = createStore(
    redecer, 
    enhancer
    );
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;