import {createStore,applyMiddleware,compose} from 'redux';
import redecer from './redecer';

// use redux-sagas
import createSagaMiddleware from 'redux-saga'
import sagas from "./sagas"
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// use redux-thunk
// import thunk from 'redux-thunk';
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     );

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  );

const  store = createStore(redecer, enhancer);

sagaMiddleware.run(sagas)

export default store;