import {combineReducers, legacy_createStore as createStore} from "redux"
import { reducer } from "./reducer";
// create store here

const rootReducer = combineReducers({
  data : reducer
})
export const store = createStore (
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
