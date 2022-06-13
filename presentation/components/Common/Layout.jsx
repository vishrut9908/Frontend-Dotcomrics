import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";


import React, {  useContext, useState } from 'react'
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";
import Chatbot from "./Chatbot";
import { DrawerContext } from "../../../application/contexts/DrawerAction";


function Layout({children}) {
    // const [open, setOpen] = useState(false);
    const context = useContext(DrawerContext);
    const openDrawer = () => {
        setOpen(!open);
    }

    return (
        <div className="app">
            {/* <Header setOpen={openDrawer}/> */}
            <AnimatePresence>
                {
                    context.open?
                    <Drawer></Drawer>:null
                }
            </AnimatePresence>
            {/* <Chatbot></Chatbot> */}
            {children}
            {/* <Contact/> */}
            <Footer/>
        </div>
    )
}

export default Layout
