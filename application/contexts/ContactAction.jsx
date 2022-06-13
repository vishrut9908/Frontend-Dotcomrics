import React,{useReducer,createContext} from 'react'
import {ContactReducer,initialState} from '../reducers/contactReducer'
import { POST_CONTACT_EMAIL_ERROR, POST_CONTACT_EMAIL_REQUEST, POST_CONTACT_EMAIL_SUCCESS } from '../types/contactType';
import {postContact,postEmail, postQuickContact} from '../../infrastructure/contact/data'
import { toast } from 'react-toastify';

export const ContactContext = createContext();

function ContactActionProvider({children}) {
    const [state, dispatch] = useReducer(ContactReducer, initialState)

    const ContactAction = async(body)=>{
        try {
            dispatch({
                type:POST_CONTACT_EMAIL_REQUEST
            })
            const data = await postContact(body);
            // const data2 = await postEmail(body);
            toast.success("Thanks for filling out our form!");
            dispatch({
                type:POST_CONTACT_EMAIL_SUCCESS,
            }) 
        } catch (error) {
            toast.error("something went wrong");
            dispatch({
                type:POST_CONTACT_EMAIL_ERROR,
                payload:error
            })
        }
    }

    const QuickAction = async(body)=>{
        try {
            dispatch({
                type:POST_CONTACT_EMAIL_REQUEST
            })
            const data = await postQuickContact(body);
            // const data2 = await postEmail(body);
            toast.success("Thanks for filling out our form!");
            dispatch({
                type:POST_CONTACT_EMAIL_SUCCESS,
            }) 
        } catch (error) {
            console.log(error);
            toast.error("something went wrong");
            dispatch({
                type:POST_CONTACT_EMAIL_ERROR,
                payload:error
            })
        }
    }

    return (
        <ContactContext.Provider value={{ContactState:state,ContactAction:ContactAction,QuickAction:QuickAction}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactActionProvider
