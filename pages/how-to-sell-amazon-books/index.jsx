import Head from 'next/head'
import React,{useContext, useEffect} from 'react'
import { BookContext } from '../../application/contexts/BookAction'
import Books from '../../presentation/components/Books/Books'
import Title from '../../presentation/components/Books/Title'
import Chatbot from '../../presentation/components/Common/Chatbot'
import Header from '../../presentation/components/Common/Header'
import styeles from '../../styles/books/Books.module.css'

function Index() {
    const context = useContext(BookContext);
    useEffect(()=>{
        context.BooksAction();
    },[])
    return (
        <div className={styeles['books-main']}>
            <Head>
        <title>Books For Selling On Amazon | Best Books For Selling On Amazon</title>
        <meta name="description" content="Discover ways to create keyword favoritism, improve your content & crush your competition. Become a best seller on Amazon today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header isDark={false}></Header>
            <Title></Title>
            <Books></Books>
            {/* <Chatbot></Chatbot> */}
        </div>
    )
}

export default Index
