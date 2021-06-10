import { createStore ,compose ,applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga';
import reducer from './reducer';
import sages from './rootSage';
const sageMiddleware = createSageMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const store  = createStore(reducer,composeEnhancers(
    // applyMiddleware(thunk)
    applyMiddleware(sageMiddleware),
));

sageMiddleware.run(sages);

export default store;