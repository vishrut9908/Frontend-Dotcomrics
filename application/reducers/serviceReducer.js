import {GET_SERVICES_ERROR,GET_SERVICES_REQUEST,GET_SERVICES_SUCCESS,GET_SERVICE_ERROR,GET_SERVICE_REQUEST,GET_SERVICE_SUCCESS} from '../types/serviceTypes'

export const initialState = {
    isLoading:false,
    isError:false,
    error:{},
    services:[],
    service:{},
}

export const ServiceReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_SERVICES_REQUEST:
        case GET_SERVICE_REQUEST:
            console.log("reducer loading");
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_SERVICES_SUCCESS:
            console.log('reducer success',action.payload);
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                services:action.payload
            }
        case GET_SERVICE_SUCCESS:
            // console.log('reducer error',action.payload);
            return {
                ...state,
                isLoading:false,
                isError:false,
                error:{},
                service:action.payload
            }
        case GET_SERVICES_ERROR:
        case GET_SERVICE_ERROR:
            // console.log('reducer success',action.payload);
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