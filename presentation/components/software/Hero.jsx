import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/home/Hero.module.css'
import Title from './Title'

function Hero() {
    return (
        <div className={`${styles['hero-main']} ${styles['hero-main-about']}`}>
            
            <Title title="Dashboard & Analytics Platform" subtitle="Marketplace Agency Tour"></Title>
            <div className={`${styles['wrapper-hero']}`}>
                <div  className={`${styles['hero-left']} ${styles['hero-left-width']}`}>
                <h1><span className={styles['title-hero']}></span><span>A single analytics platform for all your channels.</span></h1>
                <p>Eliminate administrative tasks. Accelerate sales.</p>
                {/* <a href='' target='_blank'><button>Our Dashboard</button></a> */}
            </div>
            <div  className={styles['hero-right']}>
                <img className={styles['hero-img-small']} src='/analysis/tablet.png'></img>
            </div>
            {/* <motion.div style={{top:top,scale:scale}} className={styles['home-bubble']}></motion.div> */}
            </div>
        </div>
    )
}

export default Hero
