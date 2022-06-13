import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/home/Contact.module.css'

function Contact() {
    return (
        <div className={styles['contact']}>
            <h2>Have Questions for us?</h2>
            <p>We strive to become an extension of your team, fitting in wherever you need our help.</p>
            <Link href='/contact-amazon-marketing-agency'><button>Start a conversation</button></Link>
        </div>
    )
}

export default Contact
