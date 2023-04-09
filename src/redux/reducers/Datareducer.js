import { ActionTypes } from "../constants/Actiontypes";

const initialState = {
    articles : [],
    totalResults: 0,
    page: 1
}
export const dataReducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_ARTICLES:
            return  {...state, articles: payload};
                
        case ActionTypes.SET_TOTALRESULTS:
            return {...state, totalResults: payload};
            
        case ActionTypes.SET_PAGE:
            return {...state, page: payload};

        default:
            return state;
    }
    
}

// export const totalResults = (state= initialState, {type})