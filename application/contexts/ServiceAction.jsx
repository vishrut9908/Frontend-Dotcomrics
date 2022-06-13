import React,{useReducer,createContext} from 'react'
import {ServiceReducer,initialState} from '../reducers/serviceReducer'
import { GET_SERVICES_ERROR, GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICE_ERROR, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS } from '../types/serviceTypes';
import {getService,getServices} from '../../infrastructure/services/data'

export const ServiceContext = createContext();

function ServiceActionProvider({children}) {
    const [state, dispatch] = useReducer(ServiceReducer, initialState)

    const ServicesAction = async()=>{
        try {
            dispatch({
                type:GET_SERVICES_REQUEST
            })
            const data = await getServices();
            dispatch({
                type:GET_SERVICES_SUCCESS,
                payload:data.data.data
            }) 
        } catch (error) {
            dispatch({
                type:GET_SERVICES_ERROR,
                payload:error
            })
        }
    }
    
    const ServiceAction = async(id)=>{
        console.log("called",id);
        try {
            dispatch({
                type:GET_SERVICE_REQUEST
            })
            const data = await getService(id);
            console.log(data);
            // console.log("hello data",data.data.data);
            dispatch({
                type:GET_SERVICE_SUCCESS,
                payload:data.data.data
            }) 
        } catch (error) {
            console.log("called",error);
            dispatch({
                type:GET_SERVICE_ERROR,
                payload:error
            })
        }
    }

    return (
        <ServiceContext.Provider value={{ServiceState:state,ServicesAction:ServicesAction,ServiceAction:ServiceAction}}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceActionProvider
