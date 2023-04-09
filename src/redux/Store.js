import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const store = configureStore({reducer: rootReducer},{}, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store