import React, { useContext, useMemo } from 'react'
import { ServiceContext } from '../../../application/contexts/ServiceAction'
import styles from '../../../styles/services/Title.module.css'
import TitleMain from '../Blogs/Title'

function Title() {
    const context = useContext(ServiceContext);
    const title = useMemo(()=>context?.ServiceState?.service[0]?.attributes?.title,[context?.ServiceState?.service[0]?.attributes?.title])
    return (
        <div className={styles['title']}>
           <h1>{context?.ServiceState?.service[0]?.attributes?.title}</h1> 
        </div>
            // <TitleMain title={title}></TitleMain>
    )
}

export default Title
