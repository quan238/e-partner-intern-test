import { combineReducers, createStore } from "redux";
import {thunk} from"redux-thunk"
import CustomersReducer from "./Reducers/CustomersReducer";
const rootReducer = combineReducers({
  Customer: CustomersReducer,
});
export const store = createStore(rootReducer);
