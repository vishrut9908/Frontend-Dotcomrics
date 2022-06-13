import {POST_CONTACT_EMAIL_ERROR,POST_CONTACT_EMAIL_REQUEST,POST_CONTACT_EMAIL_SUCCESS} from '../types/contactType'

export const initialState = {
    isLoading:false,
    isError:false,
    isSuccess:false,
    error:{},
}

export const ContactReducer = (state=initialState,action) => {
    switch (action?.type) {
        case POST_CONTACT_EMAIL_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
                error:{}
            }
        case POST_CONTACT_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                error:{},
            }
        case POST_CONTACT_EMAIL_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
                error:action?.payload,
            }
        default:
            return state
    }
}
