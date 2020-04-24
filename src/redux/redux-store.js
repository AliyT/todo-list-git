import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";

// appPage - это state который можно получить с помощью getState();
let reducers = combineReducers({
    appPage: appReducer
});

let store = createStore(reducers);

export default store;