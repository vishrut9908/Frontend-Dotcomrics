import {GET_LOGO_ERROR,GET_LOGO_REQUEST,GET_LOGO_SUCCESS} from '../types/logoTypes'
export const initialState = {
    isLoading:false,
    isError:false,
    logos:{},
    error:{},
}


export const logoReducer = (state=initialState,action) => {
    switch (action?.type) {
        case GET_LOGO_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case GET_LOGO_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                data:action?.payload,
                error:{},
            }
        case GET_LOGO_ERROR:
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