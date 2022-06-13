import React, { useState } from 'react'
import styles from '../../../styles/home/Hero.module.css'
import {AnimatePresence, motion, useTransform, useViewportScroll} from 'framer-motion'
import { useInterval } from 'react-use';
import Link from 'next/link';

const landingVarients = {
    animate:{
        y:[0,30],
        x:[0,-30],
        transition:{
            y:{
                yoyo: Infinity,
                duration:5,
            }
        }
    }
}
const landingVarients01 = {
    initial:{
        opacity:0,
        x:-200
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:0.4,
        }
    },
    exit:{
        opacity:0,
        x:200,
    }
}

function Hero() {
    const [detailId,setDetailId] = useState(1);

    useInterval(
        ()=>{
            if(detailId === 2){
                setDetailId(1)
            }else{
                setDetailId(detailId+1)
            }
        },
        4000
    )

    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const top = useTransform(scrollYProgress, [0, 1], [-10, -7000]);
    
    return (
        <div className={styles['hero-main']}>
            <div className={styles['wrapper-hero']}>
            <motion.div variants={landingVarients01} initial='initial' animate='animate' exit='exit' className={styles['hero-right']}>
                <img src='/home/why-choose-us-banner.png'></img>
            </motion.div>
                <motion.div variants={landingVarients01} initial='initial' animate='animate' exit='exit' className={styles['hero-left']}>
                <h1><span className={styles['title-hero']}>Dotcom Reps</span><span>Consulting </span><span>Agency for </span><span>Amazon Sellers 
                    {/* <em className={styles['est']}>Est. 2009</em> */}
                </span></h1>
                {/* <p className={styles['est']}></p> */}
                <p>Your friendly experts for Amazon Seller Central, Vendor Central & KDP marketplaces.</p>
                <Link href='/about-amazon-marketing-agency'><button>Know more</button></Link>
            </motion.div>
            {/* <motion.div style={{top:top,scale:scale}} className={styles['home-bubble']}></motion.div> */}
            </div>
        </div>
    )
}

export default Hero
