import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { BlogContext } from '../../application/contexts/BlogAction';
import { getImg } from '../../infrastructure/common/imageurl';
import Header from '../../presentation/components/Common/Header'
import styles from '../../styles/blogs/individual/Individual.module.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Title from '../../presentation/components/Blogs/Title'
import moment from 'moment';
import {BsPerson} from 'react-icons/bs'
import Chatbot from '../../presentation/components/Common/Chatbot';
import Head from 'next/head';

function BlogIndi() {
    const context = useContext(BlogContext);
    const history = useRouter();
    useEffect(()=>{
        console.log(history.query.id);
    context.BlogAction(history.query.id);
    },[history.query.id])
    const contextObj = context?.BlogState?.blog[0];
    console.log(contextObj);
    return (
        <>
    <Head>
        <title>{contextObj?.attributes?.title}</title>
        <meta name="description" content={contextObj?.attributes?.description?.substr(0,100)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header isDark={false}></Header>
        <Title title={contextObj?.attributes?.title}></Title>
        <div className={styles['blog-ind']}>
            <div className={styles['blog-indi-img']}>
                <img src={getImg(contextObj?.attributes?.image?.data?.attributes?.formats?.small?.url)}></img>
            </div>
            <div className={styles['blog-ind-details']}>
            <p className={styles['date-ind']}><hr/>{moment(contextObj?.attributes?.posted).format("MM-DD-YYYY")}</p>
            {/* <h1>{contextObj?.attributes?.title}</h1> */}
            <p className={styles['publisher']}><BsPerson color='#ff9123'></BsPerson><span>{contextObj?.attributes?.publisher}</span></p>
                <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>{contextObj?.attributes?.description}</ReactMarkdown>
            </div>
        </div>
        {/* <Chatbot></Chatbot> */}
        </>
    )
}

export default BlogIndi
