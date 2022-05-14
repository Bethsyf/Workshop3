import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerRegister } from "../reducers/reducerRegister";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    user: reducerRegister,
    
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)