import Head from 'next/head';
import React, { useContext, useEffect } from 'react'
import { BlogContext } from '../../application/contexts/BlogAction';
import Blogs from '../../presentation/components/Blogs/Blogs'
import Pagination from '../../presentation/components/Blogs/Pagination';
import Title from '../../presentation/components/Blogs/Title'
import Chatbot from '../../presentation/components/Common/Chatbot';
import Header from '../../presentation/components/Common/Header'

function Index() {
    const context = useContext(BlogContext);
    useEffect(()=>{
        context.BlogsAction();
    },[])
    return (
        <div>
    <Head>
        <title>Amazon Marketing Blogs | Best Amazon Bloggers</title>
        <meta name="description" content="Stay up-to-date with our latest articles on best Amazon practices, Amazon SEO, Amazon PPC & more. Learn more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Header isDark={false}></Header>
            <Title title='Amazon Selling Tips & Tricks'></Title>
            <Blogs></Blogs>
            <Pagination></Pagination>
            {/* <Chatbot></Chatbot> */}
        </div>
    )
}

export default Index
