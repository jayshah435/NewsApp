import { combineReducers } from "redux";
import { dataReducer } from "./Datareducer";


export const rootReducer = combineReducers({
    allArticles: dataReducer
});


 