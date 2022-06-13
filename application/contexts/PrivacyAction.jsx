import React,{useReducer,createContext} from 'react'
import {privacyReducer,initialState, termReducer,initialStateTerm} from '../reducers/privacyReducer'
import {GET_PRIVACY_ERROR,GET_PRIVACY_REQUEST,GET_PRIVACY_SUCCESS, GET_TERM_ERROR, GET_TERM_REQUEST, GET_TERM_SUCCESS} from '../types/privacyTypes'
import {getPrivacy, getTerm} from '../../infrastructure/privacy/privacy'
import { logoReducer } from '../reducers/logoReducer';
import { GET_LOGO_ERROR, GET_LOGO_REQUEST, GET_LOGO_SUCCESS } from '../types/logoTypes';
import { getLogo } from '../../infrastructure/Home/logo';

export const PrivacyContext = createContext();

function PrivacyActionProvider({children}) {
    const [state, dispatch] = useReducer(privacyReducer, initialState)
    const [stateTerm, dispatchTerm] = useReducer(termReducer, initialStateTerm)
    const [stateLogo, dispatchLogo] = useReducer(logoReducer, initialStateTerm)

    const PrivacyAction = async()=>{
        try {
            dispatch({
                type:GET_PRIVACY_REQUEST
            })
            const data = await getPrivacy();
            dispatch({
                type:GET_PRIVACY_SUCCESS,
                payload:data.data?.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_PRIVACY_ERROR,
                payload:error
            })
        }
    }

    const LogoAction = async()=>{
        try {
            dispatchLogo({
                type:GET_LOGO_REQUEST
            })
            const data = await getLogo();
            dispatchLogo({
                type:GET_LOGO_SUCCESS,
                payload:data.data?.data
            }) 
        } catch (error) {
            dispatchLogo({
                type:GET_LOGO_ERROR,
                payload:error
            })
        }
    }

    const TermAction = async()=>{
        try {
            dispatchTerm({
                type:GET_TERM_REQUEST
            })
            const data = await getTerm();
            dispatchTerm({
                type:GET_TERM_SUCCESS,
                payload:data.data?.data
            }) 
        } catch (error) {
            dispatchTerm({
                type:GET_TERM_ERROR,
                payload:error
            })
        }
    }

    return (
        <PrivacyContext.Provider value={{PrivacyState:state,TermState:stateTerm,LogState:stateLogo,PrivacyAction:PrivacyAction,TermAction:TermAction,LogoAction:LogoAction}}>
            {children}
        </PrivacyContext.Provider>
    )
}

export default PrivacyActionProvider
