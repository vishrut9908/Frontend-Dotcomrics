import {GET_BOOKS_ERROR,GET_BOOKS_REQUEST,GET_BOOKS_SUCCESS,GET_BOOK_ERROR,GET_BOOK_REQUEST,GET_BOOK_SUCCESS} from '../types/bookTypes'

export const initialState = {
    isLoading:false,
    isError:false,
    error:{},
    books:[],
    book:{},
}

export const BookReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_BOOKS_REQUEST:
        case GET_BOOK_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                books:action.payload
            }
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                book:action.payload
            }
        case GET_BOOKS_ERROR:
        case GET_BOOK_ERROR:
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