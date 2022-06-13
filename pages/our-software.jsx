import Head from 'next/head'
import Chatbot from '../presentation/components/Common/Chatbot'
import Header from '../presentation/components/Common/Header'
import Connectivity from '../presentation/components/software/Connectivity'
import Hero from '../presentation/components/software/Hero'
import Intro from '../presentation/components/software/Intro'
import Overview from '../presentation/components/software/Overview'
import Title from '../presentation/components/software/Title'
import styles from '../styles/software/Software.module.css'

function OurSoftware() {
    return (
        <div className={styles['software']}>
        <Head>
            <title>Amazon Dashboard & Analytics Platform | Best Amazon Dashboard & Analytics Platform</title>
            <meta name="description" content="A single analytics platform for all your channels." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <Header></Header>
            {/* <Title title="Dashboard & Analytics Platform" subtitle="Marketplace Agency Tour"></Title> */}
            <Hero></Hero>
            <Intro></Intro>
            <Overview></Overview>
            <Connectivity></Connectivity>
            {/* <Chatbot></Chatbot> */}
        </div>
    )
}

export default OurSoftware
