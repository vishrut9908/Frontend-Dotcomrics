import React,{useReducer,createContext} from 'react'
import {BookReducer,initialState} from '../reducers/bookReducer'
import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOK_ERROR, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from '../types/bookTypes';
import {getBook,getBooks} from '../../infrastructure/books/data'

export const BookContext = createContext();

function BookActionProvider({children}) {
    const [state, dispatch] = useReducer(BookReducer, initialState)

    const BooksAction = async()=>{
        try {
            dispatch({
                type:GET_BOOKS_REQUEST
            })
            const data = await getBooks();
            dispatch({
                type:GET_BOOKS_SUCCESS,
                payload:data.data.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_BOOKS_ERROR,
                payload:error
            })
        }
    }

    const BookAction = async(id)=>{
        try {
            dispatch({
                type:GET_BOOK_REQUEST
            })
            const data = await getBook(id);
            dispatch({
                type:GET_BOOK_SUCCESS,
                payload:data
            }) 
        } catch (error) {
            dispatch({
                type:GET_BOOK_ERROR,
                payload:error
            })
        }
    }

    return (
        <BookContext.Provider value={{BookState:state,BooksAction:BooksAction,BookAction:BookAction}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookActionProvider
