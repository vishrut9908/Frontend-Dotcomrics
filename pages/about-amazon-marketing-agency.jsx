import Head from 'next/head'
import React from 'react'
import Hero from '../presentation/components/About/Hero'
import Speciality from '../presentation/components/About/Speciality'
import Title from '../presentation/components/Blogs/Title'
import Chatbot from '../presentation/components/Common/Chatbot'
import Header from '../presentation/components/Common/Header'
import styles from '../styles/about/About.module.css'

function about() {
    return (
        <div className={styles['about-page']}>
            <Head>
        <title>About DotCom Reps | Best Amazon Marketing Services Company</title>
        <meta name="description" content="DotCom Reps LLC was established in 2009 as a Amazon manufacturer’s rep firm specializing in helping manufacturers increase their gross sales. Learn more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isDark={false}></Header>
            <Title title='Marketing Agency for Amazon Sellers'></Title>
            <Hero></Hero>
            <Speciality></Speciality>
            {/* <Chatbot></Chatbot> */}
        </div>
    )
}

export default about
