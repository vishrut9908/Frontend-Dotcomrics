import React,{useState,createContext} from 'react'

export const DrawerContext = createContext();

function DrawerActionProvider({children}) {
    const [open,setOpen] = useState(false);
    const openDrawer = () => {
        setOpen(!open);
    }
    return (
        <DrawerContext.Provider value={{open:open,openDrawer:openDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerActionProvider
