import { blogsurl, blogsindividualurl, blogpagesurl } from '../common/url'
import { getRequest } from '../common/config'

 export const getBlogs = ()=>{
    return getRequest(blogsurl())
}

 export const getPageBlogs = (id)=>{
    return getRequest(blogpagesurl(id));
}

export const getBlog = (id) => {
    return getRequest(blogsindividualurl(id))
}