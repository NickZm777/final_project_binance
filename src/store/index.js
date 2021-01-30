import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension({ trace: true, traceLimit: 25 }));
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(createRootReducer(), initialState, composedEnhancers);

export default store;
