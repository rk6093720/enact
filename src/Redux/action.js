import * as types from "./actionTypes";
import axios from "axios";
const latestmovies =()=>(dispatch)=>{
    dispatch({ type: types.LATESTMOVIES_REQUEST });
    return axios.get("https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9")
    .then((r)=>{
        console.log(r);
        return dispatch({type:types.LATESTMOVIES_SUCCESS, payload:r.data })
    })
    .catch((e)=>{
        dispatch({type:types.LATESTMOVIES_FAILURE, payload:e })
    })
}

const getmovie =(payload)=>{
    return {
        type:types.LATESTMOVIES_SUCCESS,
        payload,
    }
}

const increament = ()=>{
    
    return {
        type:types.INC,
    }
}
const decrement = ()=>{
    return {
        type:types.DEC,
        
    }
}
const searchText=(text)=>(dispatch)=>{
    dispatch( {
        type:types.SEARCHTEXT,
        payload:text
    });
}

const searchMovie=(text,params)=> (dispatch)=>{
    dispatch({type:types.SEARCH_JOB_REQUEST}) 
return axios.get("https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9",{
    params:{
        s:text,
        ...params
    }
})
    .then((r)=>{
        dispatch({type:types.SEARCH_JOB_SUCCESS, payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.SEARCH_JOB_FAILURE, payload:e})
    })
}
export {
    latestmovies,
    getmovie,
    increament,
    decrement,
    searchText,
    searchMovie

}
