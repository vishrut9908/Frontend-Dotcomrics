import React from 'react'
import styles from '../../../styles/home/Hero.module.css'
import Title from './Title'
import {MdDone} from 'react-icons/md'

function Intro() {
    return (
        <div className={`${styles['hero-main']} ${styles['hero-main-about']} ${styles['hero-main-about-2']}`}>
            
            <Title title="Introduction" subtitle="Multi-marketplaces sales and analytics plateform."></Title>
            <div className={`${styles['wrapper-hero']} ${styles['wrapper-hero-flex']}`}>
            <div  className={`${styles['hero-right']} ${styles['hero-img-large']}`}>
                <img  src='/analysis/analysis-main.png'></img>
            </div>
            <div className={`${styles['hero-left']} ${styles['hero-left-width-2']}`}>
                
                    <li><MdDone></MdDone> <span>Multi-store</span></li>
                    <li><MdDone></MdDone> <span>Multi-platform</span></li>
                    <li><MdDone></MdDone> <span>Multi-currency</span></li>
                    <li><MdDone></MdDone> <span>Sales & marketing insights</span></li>
                    <li><MdDone></MdDone> <span>Operational performance</span></li>
                    <li><MdDone></MdDone> <span>Profitablity</span></li>
                    <li><MdDone></MdDone> <span>Review Automation</span></li>
            
            </div>
            {/* <motion.div style={{top:top,scale:scale}} className={styles['home-bubble']}></motion.div> */}
            </div>
        </div>
    )
}

export default Intro
