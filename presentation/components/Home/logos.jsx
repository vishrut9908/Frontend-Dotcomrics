import React, { useContext } from 'react'
import { PrivacyContext } from '../../../application/contexts/PrivacyAction'
import { getImg } from '../../../infrastructure/common/imageurl';
import styles from '../../../styles/home/Logos.module.css'

function Logos() {
    const context = useContext(PrivacyContext);
    console.log(context.LogState?.data?.attributes?.logo?.data);

    return (
        <div className={styles['logos']}>
            <div className={styles['logos-wrapper']}>
                {
                    context.LogState?.data?.attributes?.logo?.data?.map(
                        logo => 
            <div className={styles['logo']}>
                <img className={styles['logo-small']} src={getImg(logo?.attributes?.url)}></img>
            </div>
                    )
                }
            {/* <div className={styles['logo']}>
                <img src="/home/brand-02.png"></img>
            </div>
            <div className={styles['logo']}>
                <img src="/home/brand-03.png"></img>
            </div>
            <div className={styles['logo']}>
                <img src="/home/brand-04.png"></img>
            </div>
            <div className={styles['logo']}>
                <img src="/home/brand-05.png"></img>
            </div> */}
            </div>
        </div>
    )
}

export default Logos
