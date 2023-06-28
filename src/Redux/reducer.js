
import * as types from "./actionTypes"

const initialState = {
   movie:[],
   text:"",
   lastestmovie:[
    {
      "id":1,
      "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3510/1543510-i-c2dd74fe3f68",
    },
    {
        "id":2,
      "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4204/1544204-v-0b40a7d5b382",
    },
    {
        "id":3,
        "image":"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/301/1540301-t-c00389eb40ff",
    },
    {
        "id":4,
       "image": "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8827/1538827-v-ffacd368d35d"
    },
    {
        "id":5,
        'image':"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5980/1535980-v-fcfda159e624",
    },
    {
       "id":6,
       "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4622/1534622-v-49ee55ea1cae",
    },
    {
        "id":7,
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3982/1533982-v-f755aac5abdc",
     },
     {
        "id":8,
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/170/1530170-v-b639a56fa1d6",
     },
     {
        "id":9,
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4621/1494621-v-f8339d877d8a",
     },
     {
        "id":10,
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4621/1494621-v-f8339d877d8a",
     },

   ],
   count:0,
   isLoading:false,
   isError:false,
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
    case types.LATESTMOVIES_REQUEST:
        return {
            ...state,
            isLoading:true,
            isFinite:false,
        }
    case types.LATESTMOVIES_SUCCESS:

        return {
            ...state,
            isLoading:false,
            movie:payload,
            isError:false,
        }
    case types.LATESTMOVIES_FAILURE:
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
        case types.MOVIES_SUCCESS:
            return {
                ...state,
                isLoading:false,
                lastestmovie:payload,
                isError:false,
            }
        case types.INC:
            return {
                ...state,
                count : state.count +  1,
            }
        case types.DEC:
            return{
                ...state,
                count : state.count - 1,
            }
            case types.SEARCHTEXT:
                return{
                    ...state,
                    text:payload,
                    isLoading:false
                }
                case types.SEARCH_JOB_REQUEST:
                    return { 
                        ...state, 
                        isLoading:true,
                        isError:false,
                    }
                case types.SEARCH_JOB_SUCCESS:
                    return  {
                        ...state,
                        isLoading:false,
                        movie:payload,
                        isError:false
                    }
                    
                case types.SEARCH_JOB_FAILURE:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
    default:
        return state
    }
}

export {reducer}