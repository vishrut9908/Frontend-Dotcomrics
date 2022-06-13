import React from 'react'
import styles from '../../../styles/contact/quick.module.css'
import ChatFormik from '../../components/Home/chat'

function Chatbot({setOpen}) {
    return (
        <div className={styles['chatbot']}>
            {
            <div className={styles['wrapper-contact-form-inner']}>
                    <ChatFormik setOpen={setOpen}></ChatFormik>
                </div>
            }
            {/* <div className={styles['chat-icon']} onClick={()=>setIsOpen((prev)=>!prev)}><BsChatFill color='white' size='1.5rem'></BsChatFill></div> */}
        </div>
    )
}

export default Chatbot
