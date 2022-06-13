import React,{useReducer,createContext} from 'react'
import {ReviewReducer,initialState} from '../reducers/reviewReducer'
import { GET_REVIEWS_ERROR, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEW_ERROR, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from '../types/reviewTypes';
import {getReview,getReviews} from '../../infrastructure/reviews/data'

export const ReviewContext = createContext();

function ReviewActionProvider({children}) {
    const [state, dispatch] = useReducer(ReviewReducer, initialState)

    const ReviewsAction = async()=>{
        try {
            dispatch({
                type:GET_REVIEWS_REQUEST
            })
            const data = await getReviews();
            dispatch({
                type:GET_REVIEWS_SUCCESS,
                payload:data.data?.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_REVIEWS_ERROR,
                payload:error
            })
        }
    }

    const ReviewAction = async(id)=>{
        try {
            dispatch({
                type:GET_REVIEW_REQUEST
            })
            const data = await getReview(id);
            dispatch({
                type:GET_REVIEW_SUCCESS,
                payload:data
            }) 
        } catch (error) {
            dispatch({
                type:GET_REVIEW_ERROR,
                payload:error
            })
        }
    }

    return (
        <ReviewContext.Provider value={{ReviewState:state,ReviewsAction:ReviewsAction,ReviewAction:ReviewAction}}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewActionProvider
