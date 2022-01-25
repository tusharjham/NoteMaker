import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({ User: userReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
