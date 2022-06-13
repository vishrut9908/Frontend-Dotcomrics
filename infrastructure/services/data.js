import { serviceurl, serviceindividualurl } from '../common/url'
import { getRequest } from '../common/config'

 export const getServices = ()=>{
     return getRequest(serviceurl())
}
    
export const getService = async(id)=>{
    console.log('called infra');
    const data = await getRequest(serviceindividualurl(id));
    // console.log('called-03');
    return data;
}