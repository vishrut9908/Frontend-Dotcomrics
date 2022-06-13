import {GET_REVIEWS_ERROR,GET_REVIEWS_REQUEST,GET_REVIEWS_SUCCESS,GET_REVIEW_ERROR,GET_REVIEW_REQUEST,GET_REVIEW_SUCCESS} from '../types/reviewTypes'

export const initialState = {
    isLoading:false,
    isError:false,
    error:{},
    reviews:[],
    review:{},
}

export const ReviewReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_REVIEWS_REQUEST:
        case GET_REVIEW_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                reviews:action.payload
            }
        case GET_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                review:action.payload
            }
        case GET_REVIEWS_ERROR:
        case GET_REVIEW_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                error:action.payload
            }
        default:
            return state
    }
}