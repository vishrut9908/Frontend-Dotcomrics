import { reviewsurl, reviewsindividualurl } from '../common/url'
import { getRequest } from '../common/config'

 export const getReviews = ()=>{
    return getRequest(reviewsurl())
}

export const getReview = (id)=>{
    return getRequest(reviewsindividualurl(id))
}