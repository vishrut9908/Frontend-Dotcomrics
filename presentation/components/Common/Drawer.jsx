import React, { useContext, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { DrawerContext } from '../../../application/contexts/DrawerAction'
import { ServiceContext } from '../../../application/contexts/ServiceAction'


const landingVarients01 = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            duration:0.4,
        }
    }
}
const landingVarients02 = {
    initial:{
        y:-2000,
    },
    animate:{
        y:0,
        transition:{
            duration:1,
        }
    }
}

const landingVarients03 = {
    initial:{
        y:2000,
    },
    animate:{
        y:0,
        transition:{
            duration:1,
        }
    }
}

function Drawer() {
    const context = useContext(DrawerContext);
    const [navOpen,setNavOpen] = useState(false);
    const contextNav = useContext(ServiceContext);
    useEffect(()=>{
        contextNav.ServicesAction();
    },[])
    return (
        <motion.div variants={landingVarients01} initial='initial' animate='animate' className='drawer'>
            <motion.div variants={landingVarients02} initial='initial' animate='animate' className='drawer-nav'>
                <motion.div className='drawer-nav-wrapper'>
                    <Link href='/'><p onClick={()=>{context.openDrawer()}}>Home</p></Link>
                    <Link href='/about'><p onClick={()=>{context.openDrawer()}}>About Us</p></Link>
                    <Link href='/oursoftware'><p onClick={()=>{context.openDrawer()}}>Our Softwares</p></Link>
                    <p onClick={()=>{setNavOpen((prev)=>!prev)}}>Services</p>
                    {
                    navOpen? <div className='font-nav'>
                    {
                                    contextNav?.ServiceState?.services?.map(
                                        service =>
                                        <Link href={`/services/${service?.id}`}><p onClick={()=>{context.openDrawer()}}>{service?.attributes?.menu_name}</p></Link>
                                    )
                    }
                    </div>:null
                    }
                    <Link href='/blogs'><p onClick={()=>{context.openDrawer()}}>Blogs</p></Link>
                    <Link href='/books'><p onClick={()=>{context.openDrawer()}}>Books</p></Link>
                    <Link href='/contact'><p onClick={()=>{context.openDrawer()}}>Contact Us</p></Link>
                </motion.div>
                <motion.div className='bg-drawer-nav' ></motion.div>
            </motion.div>
                <motion.div className='drawer-img' variants={landingVarients03} initial='initial' animate='animate'>
                    {/* <img src='/common/menu-bg.png'></img> */}
                    <div className='bg-drawer-nav' ></div>
                    <div className='bg-img-drawer'></div>
                </motion.div>
        </motion.div>
    )
}

export default Drawer
