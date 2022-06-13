import React, { useContext, useEffect, useMemo, useState } from 'react'
import styles from '../../../styles/contact/ContactForm.module.css'
import {IoLocationSharp} from 'react-icons/io5'
import {MdCall, MdEmail} from 'react-icons/md'
import { ContactContext } from '../../../application/contexts/ContactAction';
import ContactFormik from './ContactFormik';
import {toast} from 'react-toastify'

toast.configure();
function ContactForm() {
    // const context = useContext(ContactContext);
    // const success = useMemo(()=>context?.ContactState?.isSuccess,[context?.ContactState?.isSuccess]);
    // const error = useMemo(()=>context?.ContactState?.isError,[context?.ContactState?.isError]);
    // useEffect(()=>{
    //     if(success){
    //         toast.success('message sent successful',{position:toast.POSITION.TOP_RIGHT})
    //     }
    // },[success])
    // useEffect(()=>{
    //     if(error){
    //         toast.error('something went wrong', {position:toast.POSITION.TOP_RIGHT})
    //     }
    // },[error])
    return (
        <div className={styles['contact-form']}>
            <div className={styles['wrapper-contact-form']}>
                <div className={styles['left-contact']}>
                    <div className={styles['address']}>
                        <h2>Reach out to us</h2>
                        <a href='https://www.google.com/maps/place/United+States+Postal+Service/@28.131006,-80.629549,14z/data=!4m5!3m4!1s0x0:0x8481dd03e6273cd2!8m2!3d28.131002!4d-80.6295486?hl=en' target='_blank'><p><IoLocationSharp></IoLocationSharp><span>PO BOX 360083, Melbourne, FL 32936.</span></p></a>
                        <a href='tel:+16102532673' target='_blank'><p><MdCall></MdCall><span>(610) 253-2673</span></p></a>
                        <a href='mailto:support@dotcomreps.com' target='_blank'><p><MdEmail></MdEmail><span>support@dotcomreps.com</span></p></a>
                    </div>
                    <div className={`${styles['address']} ${styles['address-time']}`}>
                        <h2>Office hours</h2>
                        <p><span>Monday:</span> 9:00 am EST – 6:00 pm EST</p>
                        <p><span>Tuesday:</span> 9:00 am EST – 6:00 pm EST</p>
                        <p><span>Wednesday:</span> 9:00 am EST – 6:00 pm EST</p>
                        <p><span>Thursday:</span> 9:00 am EST – 6:00 pm EST</p>
                        <p><span>Friday:</span> 9:00 am EST – 6:00 pm EST</p>
                        <p><span>Saturday:</span> Closed</p>
                        <p><span>Sunday:</span> Closed</p>
                    </div>
                </div>
                <ContactFormik></ContactFormik>
            </div>
        </div>
    )
}

export default ContactForm
