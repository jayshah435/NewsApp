import { ActionTypes } from "../constants/Actiontypes"

export const setArticles = (articles) =>{
    return {
        type: ActionTypes.SET_ARTICLES,
        payload: articles
    }
    
}

export const setTotalResults = (totalResults)=>{
    return {
        type: ActionTypes.SET_TOTALRESULTS,
        payload: totalResults
    }
}

export const setPage = (page)=>{
    return {
        type: ActionTypes.SET_PAGE,
        payload: page
    }
}