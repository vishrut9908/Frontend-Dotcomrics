import React from 'react'
import styles from '../../../styles/home/Hero.module.css'
import Title from './Title'
import {BsDot} from 'react-icons/bs'

function Overview() {
    return (
        <div className={`${styles['hero-main']} ${styles['hero-main-about']} ${styles['hero-main-about-2']}`}>
            
            <Title title="Functionality Overview" subtitle=""></Title>
            <div className={`${styles['wrapper-hero-02']}`}>
            <div className={`${styles['hero-left']} ${styles['hero-left-2']}`}>
                    <div className={styles['overview-icon']}>
                        <img src='/analysis/icon.png'></img>
                    </div>
                    <div className={styles['overview-list']}>
                    <header>Sales</header>
                    <ul>
                    <li><BsDot></BsDot><span>Consolidated trands</span></li>
                    <li><BsDot></BsDot>Sales basket drivers</li>
                    <li><BsDot></BsDot>Sales contribution</li>
                    <li><BsDot></BsDot>Sales by brand</li>
                    <li><BsDot></BsDot>Sales by catagory</li>
                    <li><BsDot></BsDot>Sales by custom group</li>
                    <li><BsDot></BsDot>Sales by product</li>
                    <li><BsDot></BsDot>Top sellers</li>
                    <li><BsDot></BsDot>Worst sellers</li>
                    <li><BsDot></BsDot>Daily sales analytics</li>
                    <li><BsDot></BsDot>Cross-marketplace comparison</li> 
                    </ul>
                    </div>
            </div>
            <div className={`${styles['hero-left']} ${styles['hero-left-2']}`}>
                    <div className={styles['overview-icon']}>
                        <img src='/analysis/icon.png'></img>
                    </div>
                    <div className={styles['overview-list']}>
            <header>Profitability</header>
                    <ul>
                    <li><BsDot></BsDot>Seller account P&L</li>
                    <li><BsDot></BsDot>Profitability by product</li>
                    <li><BsDot></BsDot>Profitability trends</li>
                    </ul>
                    </div>
            </div>
            <div className={`${styles['hero-left']} ${styles['hero-left-2']}`}>
                    <div className={styles['overview-icon']}>
                        <img src='/analysis/icon.png'></img>
                    </div>
                    <div className={styles['overview-list']}>
            <header>Operational tools</header>
                    <ul>
                    <li><BsDot></BsDot>Seller health KPIs</li>
                    <li><BsDot></BsDot>Out of stock risks</li>
                    <li><BsDot></BsDot>Inventory availability</li>
                    <li><BsDot></BsDot>Order fulfilment status</li>
                    <li><BsDot></BsDot>Order at risk</li>
                    </ul>
                    </div>
            </div>
            <div className={`${styles['hero-left']} ${styles['hero-left-2']}`}>
                    <div className={styles['overview-icon']}>
                        <img src='/analysis/icon.png'></img>
                    </div>
                    <div className={styles['overview-list']}>
            <header>Review management</header>
            <ul>
                    <li><BsDot></BsDot>Review automation</li>
                    <li><BsDot></BsDot>Review reporting</li> 
                    </ul>
                    </div>
            </div>
            <div className={`${styles['hero-left']} ${styles['hero-left-2']}`}>
                    <div className={styles['overview-icon']}>
                        <img src='/analysis/icon.png'></img>
                    </div>
                    <div className={styles['overview-list']}>
            <header>PPC insights(Amazon)</header>
            <ul>
                    <li><BsDot></BsDot>Campaign performance trends</li>
                    <li><BsDot></BsDot>Adgroup and keyword performance</li>
                    <li><BsDot></BsDot>Product performance</li>
                    </ul>
                    </div>
            </div>
            {/* <div  className={`${styles['hero-right']} `}>
                <img className={styles['hero-img-small']} src='/analysis/tablet.png'></img>
            </div> */}
            {/* <motion.div style={{top:top,scale:scale}} className={styles['home-bubble']}></motion.div> */}
            </div>
        </div>
    )
}

export default Overview
