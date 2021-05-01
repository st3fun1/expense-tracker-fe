import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import rootReducer from './reducers/index';

let finalCreateStore;
let developmentMode = true; 
let devTools = true;

if (developmentMode && devTools) {
    finalCreateStore = compose(
        applyMiddleware.apply(this, middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_ ? window.__REDUX_DEVTOOLS_EXTENSION_ : f => f
    )
} else {
    finalCreateStore = compose(
        applyMiddleware.apply(this.middleware)
    );
}
const store = createStore(rootReducer, finalCreateStore);

export default store;
