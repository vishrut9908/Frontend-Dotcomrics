import {GET_PRIVACY_ERROR,GET_PRIVACY_REQUEST,GET_PRIVACY_SUCCESS, GET_TERM_ERROR, GET_TERM_REQUEST, GET_TERM_SUCCESS} from '../types/privacyTypes'
export const initialState = {
    isLoading:false,
    isError:false,
    data:{},
    error:{},
}

export const initialStateTerm = {
    isLoading:false,
    isError:false,
    data:{},
    error:{},
}

export const privacyReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_PRIVACY_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_PRIVACY_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:action.payload,
                error:{},
            }
        case GET_PRIVACY_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                error:action?.payload,
            }
        default:
            return state
    }
}

export const termReducer = (state=initialStateTerm,action) => {
    switch (action?.type) {
        case GET_TERM_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_TERM_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:action.payload,
                error:{},
            }
        case GET_TERM_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                error:action?.payload,
            }
        default:
            return state
    }
}