import {GET_BLOGS_ERROR,GET_BLOGS_REQUEST,GET_BLOGS_SUCCESS,GET_BLOG_ERROR,GET_BLOG_REQUEST,GET_BLOG_SUCCESS} from '../types/blogTypes'

export const initialState = {
    isLoading:false,
    isError:false,
    error:{},
    blogs:[],
    blog:{},
    meta:{}
}

export const BlogReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_BLOGS_REQUEST:
        case GET_BLOG_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                blogs:action.payload.data,
                meta:action.payload.meta.pagination,
            }
        case GET_BLOG_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                blog:action.payload
            }
        case GET_BLOGS_ERROR:
        case GET_BLOG_ERROR:
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

