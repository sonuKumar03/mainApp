import { createStore, applyMiddleware, combineReducers } from "redux";
import { stores, user } from "./reducers";
import thunk from "redux-thunk";

const initialState = {
  stores: [],
  user: {},
};

const loadState = () => {
  return localStorage["janta-garage"] ? JSON.parse(localStorage["janta-garage"]) : initialState;
};

const store = createStore(combineReducers({ stores, user }), loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem("janta-garage", JSON.stringify(store.getState()));
});

export default store;
