import { contacturl, quickurl } from '../common/url'
import { postRequest } from '../common/config'

 export const postContact = (body)=>{
    return postRequest(contacturl(),{data:body})
}

 export const postEmail = (body)=>{
    return postRequest(contacturl(),body)
}

 export const postQuickContact = (body)=>{
    return postRequest(quickurl(),{data:body})
}

