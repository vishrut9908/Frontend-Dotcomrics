import { booksurl, booksindividualurl } from '../common/url'
import { getRequest } from '../common/config'

 export const getBooks = ()=>{
    return getRequest(booksurl())
}

export const getBook = (id)=>{
    return getRequest(booksindividualurl(id))
}