import Head from 'next/head'
import React from 'react'
import Header from '../presentation/components/Common/Header'
import ContactForm from '../presentation/components/Contact/ContactForm'
import MapSection from '../presentation/components/Contact/Map'
import styles from '../styles/contact/Contact.module.css'

function contact() {
    return (
        <div className={styles['contact-page']}>
            <Head>
            <title>Contact DotCom Reps | Amazon Sales & Marketing Agency</title>
            <meta name="description" content="Do you need help with your Amazon sales & marketing. Contact us today by filling out the form below or call us at (610) 253-2673." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      <Header isDark={false}></Header>
      <MapSection></MapSection>
      <ContactForm></ContactForm>
        </div>
    )
}

export default contact
