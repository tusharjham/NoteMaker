import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer } from "./reducers/noteReducers";
import { editNoteReducer } from "./reducers/editNoteReducer";
const reducer = combineReducers({
  User: userReducer,
  Notes: noteReducer,
  EditNote: editNoteReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
