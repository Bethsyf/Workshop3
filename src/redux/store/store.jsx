import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerRegister} from "../reducers/reducerRegister";
import {productsReducers} from "../reducers/reducerProducts.js"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    user: reducerRegister,
    productStore: productsReducers
    
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)