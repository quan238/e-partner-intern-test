import { combineReducers, createStore, applyMiddleware } from "redux";
import CustomersReducer from "./Reducers/CustomersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  Customer: CustomersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
