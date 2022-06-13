import React,{useReducer,createContext} from 'react'
import {BlogReducer,initialState} from '../reducers/blogReducer'
import { GET_BLOGS_ERROR, GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS, GET_BLOG_ERROR, GET_BLOG_REQUEST, GET_BLOG_SUCCESS } from '../types/blogTypes';
import {getBlog,getBlogs, getPageBlogs} from '../../infrastructure/blogs/data'

export const BlogContext = createContext();

function BlogActionProvider({children}) {
    const [state, dispatch] = useReducer(BlogReducer, initialState)

    const BlogsAction = async()=>{
        try {
            dispatch({
                type:GET_BLOGS_REQUEST
            })
            const data = await getBlogs();
            dispatch({
                type:GET_BLOGS_SUCCESS,
                payload:data.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_BLOGS_ERROR,
                payload:error
            })
        }
    }

    const BlogsPageAction = async(id,totalCount)=>{
        if(id<=totalCount && id>0){
        try {
            dispatch({
                type:GET_BLOGS_REQUEST
            })
            const data = await getPageBlogs(id.toString());
            dispatch({
                type:GET_BLOGS_SUCCESS,
                payload:data.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_BLOGS_ERROR,
                payload:error
            })
        }
    }
    }

    const BlogAction = async(id)=>{
        try {
            dispatch({
                type:GET_BLOG_REQUEST
            })
            const data = await getBlog(id);
            dispatch({
                type:GET_BLOG_SUCCESS,
                payload:data.data.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_BLOG_ERROR,
                payload:error
            })
        }
    }

    return (
        <BlogContext.Provider value={{BlogState:state,BlogsAction:BlogsAction,BlogAction:BlogAction,BlogsPageAction:BlogsPageAction}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogActionProvider
