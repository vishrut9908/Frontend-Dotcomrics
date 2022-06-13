import React, {useContext, useEffect, useMemo} from 'react'
import {useRouter} from 'next/router'
import { ServiceContext } from '../../application/contexts/ServiceAction'
import Description from '../../presentation/components/services/Description'
import Title from '../../presentation/components/services/Title'
import styles from '../../styles/services/Services.module.css'
import Header from '../../presentation/components/Common/Header'
import Link from 'next/link'
import Chatbot from '../../presentation/components/Common/Chatbot'
import Head from 'next/head'
function ServiceIndi() {
    const context = useContext(ServiceContext)
    const history = useRouter();
    const id = useMemo(()=>history.query.id,[history.query.id]);
    const title = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.title,[context?.ServiceState?.service[0]?.attributes?.title]);
    const desc1 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.description,[context?.ServiceState?.service[0]?.attributes?.description]);

    useEffect(()  => {
        // console.log("called again",history.query.id);
        context.ServiceAction(history.query.id);
    },[history.query.id])


    return (
        <div className={styles['service-main']}>
            
    <Head>
        <title>{title}</title>
        <meta name="description" content={desc1?.substr(0,100)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header isDark={false}></Header>
        <Title/>
        <Description/>
        {/* <div className={styles['service-btn-main']}>
        </div> */}
        {/* <Chatbot></Chatbot> */}
        </div>
    )
}

export default ServiceIndi
