import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { DrawerContext } from '../application/contexts/DrawerAction'
import Header from '../presentation/components/Common/Header'
import About from '../presentation/components/Home/About'
import Card from '../presentation/components/Home/Card'
import ChatBot from '../presentation/components/Common/Chatbot'
import Brands from '../presentation/components/Home/Brands'
import Clients from '../presentation/components/Home/Clients'
import Hero from '../presentation/components/Home/Hero'
import Portfolio from '../presentation/components/Home/Portfolio'
import Question from '../presentation/components/Home/Question'
import Services from '../presentation/components/Home/Services'
import styles from '../styles/home/Home.module.css'
import Contact from '../presentation/components/Home/Contact'
import Founder from '../presentation/components/Home/Founder'
import Logos from '../presentation/components/Home/logos'
import { ServiceContext } from '../application/contexts/ServiceAction'
import { ReviewContext } from '../application/contexts/ReviewAction'
import { PrivacyContext } from '../application/contexts/PrivacyAction'

import axios from 'axios'
import { BlogContext } from '../application/contexts/BlogAction'

export default function Home() {
  // const context = useContext(DrawerContext);
  // const contextService = useContext(ServiceContext);
  const contextReview = useContext(ReviewContext);
  const contextPrivacy = useContext(PrivacyContext);
  const context = useContext(BlogContext);
  const contextArray = context?.BlogState?.blogs?.sort(
      (a,b)=>Date.parse(b?.attributes?.posted)-Date.parse(a?.attributes?.posted)
  );

  useEffect(()=>{
    contextReview.ReviewsAction();
    contextPrivacy.LogoAction();
    context.BlogsAction();
    // axios.post("http://51.79.254.75/admin5483157238/api/seller/login",{
    //   "phone":"1234567890"
    // }).then(res=>{console.log("food boss",res)}).catch(err=>{console.log("food boss",err)});
  },[])

  return (
    <div className={styles["home"]}>
      <Head>
        <title>DotCom Reps: Amazon Sales & Marketing Agency</title>
        <meta name="description" content="DotCom Reps is a full-service marketing agency specializing in marketing & sales management. Guaranteed Results. Contact us today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isDark={false}></Header>
      <Hero></Hero>
      <Card></Card>
      <About></About>
      {/* <Brands></Brands> */}
      <Services></Services>
      <Question></Question>
      <Founder></Founder>
      <Portfolio blogs={contextArray}></Portfolio>
      <Clients></Clients>
      <Logos></Logos>
      <Contact></Contact>
      {/* <ChatBot></ChatBot> */}
    </div>
  )
}
