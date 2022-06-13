import React, { useContext, useEffect,useRef, useState } from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowUp} from 'react-icons/io'
import { motion } from 'framer-motion'
import { DrawerContext } from '../../../application/contexts/DrawerAction'
import { ServiceContext } from '../../../application/contexts/ServiceAction'
import Chatbot from './Chatbot'


function Header({isDark}) {
    const context = useContext(DrawerContext);
    const contextNav = useContext(ServiceContext);
    const headerRef = useRef(null);
    const[isOpen,setIsOpen] = useState(false);
    const setOpen = context.openDrawer;
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            headerRef?.current?.classList?.toggle("sticky", window.scrollY > 0);
            // if (scrollTop > lastScroll) {
            //     headerRef?.current?.style?.top = "-17rem";
            // }
            // else {
            //     headerRef?.current?.style?.top = "0rem";
            // }
            // lastScroll = scrollTop;
        })
    }, [])
    useEffect(()=>{
        contextNav.ServicesAction();
    },[])
    console.log("header nav",contextNav.ServiceState.services);
    return (
        <nav className='header' ref={headerRef}>
            {
                isOpen?
            <Chatbot setOpen={setIsOpen}></Chatbot>:null
            }
            <div className='wrapper-header'>
                <div className='logo-header'>
                    <Link href = '/'>
                        {
                            isDark?
                            <img src="/Logo-main-dark.png" alt="logo" />
                            :
                            <img src="/Logo-main.png" alt="logo" />
                        }
                    </Link>
                </div>
                <div className="btn-header">
                <div className='links-header'>
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/about-amazon-marketing-agency'><li>About Us</li></Link>
                        <li>
                            <span><span>Services </span><IoIosArrowUp></IoIosArrowUp></span>
                            <div className='pop-up'>
                                <div className='wrapper-pop-up'>
                                {
                                    contextNav?.ServiceState?.services?.map(
                                        service =>
                                        <Link href={`/services/${service?.attributes?.slug}`}><li>{service?.attributes?.menu_name}</li></Link>
                                    )
                                }
                                </div>
                            </div>
                        </li>
                        <Link href='/our-software'><li>Our Software</li></Link>
                        <Link href='/amazon-marketing-blog'><li>Blogs</li></Link>
                        <Link href='/how-to-sell-amazon-books'><li>Books</li></Link>
                        <Link href='/contact-amazon-marketing-agency'><li>Contact Us</li></Link>
                </div>
                    <a onClick={()=>setIsOpen(prev=>!prev)}><p>Inquiry</p></a>
                    <motion.button onClick={()=>setOpen()}><GiHamburgerMenu size="2rem"/></motion.button>
                </div>
            </div>
        </nav>
        
    )
}

export default Header

