import React, { useContext,useMemo,useCallback } from 'react'
import { ServiceContext } from '../../../application/contexts/ServiceAction'
import { getImg } from '../../../infrastructure/common/imageurl';
import styles from '../../../styles/services/Description.module.css'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

function Description() {
    const context = useContext(ServiceContext);
    const name1 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.name_first,[context?.ServiceState?.service[0]?.attributes?.name_first]);
    const name2 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.name_second,[context?.ServiceState?.service[0]?.attributes?.name_second]);
    const desc1 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.description,[context?.ServiceState?.service[0]?.attributes?.description]);
    const desc2 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.description_second,[context?.ServiceState?.service[0]?.attributes?.description_second]);
    const url1 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.images?.data[0]?.attributes?.url,[context?.ServiceState?.service[0]?.attributes?.images?.data[0]?.attributes?.url]);
    const url2 = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.images?.data[1]?.attributes?.url,[context?.ServiceState?.service[0]?.attributes?.images?.data[1]?.attributes?.url]);
    // const img1 = useCallback(()=>getImg(url1),[url1]);
    // const img2 = useCallback(()=>getImg(url2),[url2]);
    // console.log(img2());
    // console.log(context?.ServiceState?.service?.attributes?.images?.data[1]?.attributes.formats.thumbnail.url);
    return (
        <div className={styles['service-desc']}>
        <div className={`${styles["ser-ind"]} ${styles["ser-odd"]}`}>
            <div className={styles["left-img"]}>
                <img src={getImg(url1)} alt="services-img" />
            </div>
            <div className={styles["right-content"]}>
                <h2>{name1}</h2>
                {/* <p>{desc1}</p> */}
                <ReactMarkDown skipHtml={true} children={desc1} remarkPlugins={[remarkGfm]}></ReactMarkDown>            
                {
                    desc2?null:<Link href='/contact-amazon-marketing-agency'><button>Let&apos;s Talk</button></Link>
                }
            </div>
        </div>
        
        <div className={`${styles["ser-ind"]} ${styles["ser-even"]}`}>
            <div className={styles["right-content"]}>
                {/* <h2>{name2}</h2> */}
                <ReactMarkDown skipHtml={true} children={desc2} remarkPlugins={[remarkGfm]}></ReactMarkDown>
                
        {desc2?<Link href='/contact-amazon-marketing-agency'><button>Let&apos;s Talk</button></Link>:null}
            </div>
            <div className={styles["left-img"]}>
                {
                    url2?
                    <img src={getImg(url2)} alt="services-img" />:null
                }
            </div>
        </div>
        </div>
    )
}

export default Description
