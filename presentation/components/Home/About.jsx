import React, {useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../../styles/home/About.module.css'
import Link from 'next/link';


function About() {
    const {ref,inView} = useInView();
    const animation01 = useAnimation();
    const animation02 = useAnimation();
    useEffect(()=>{
        if (inView) {
            animation01.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.8
                }
            })
            animation02.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.8,
                    delay:0.8
                }
            })
        } else if(!inView) {
            animation01.start({
                opacity:0,
                x:-200,
                transition:{
                    duration:0.8
                }
            })
            
            animation02.start({
                opacity:0,
                x:200,
                transition:{
                    duration:0.8,
                    delay:0.8
                }
            })
        }
    },[inView])
    return (
        <div ref={ref} className={styles['about-comp']}>
            {/* <div className={`${styles['about-hand-img']} ${styles['about-hand-01']}`}>
                <img src='/home/about-hand-1.png'></img>
            </div>
            <div className={`${styles['about-hand-img']} ${styles['about-hand-02']}`}>
                <img src='/home/about-hand-2.png'></img>
            </div> */}
            <div className={styles['wrapper-about']}>
            <div className={styles['img-about']}>
                <img src='/home/about-est.png'></img>
            </div>
            <motion.div className={styles['main-about-comp']}>
                <h3>About Us?</h3>
                <h2>We Help More Customers Find Your Products And Increase <span>Your Sales.</span></h2>
                <motion.p >Dotcom Reps is a Consulting and Manufacturer's Rep Agency Specializing in Amazon Marketing & Sales Management. We are Experts with over 10 years of experience professionally selling using Seller Central and Vendor Central. Our knowledge is platform-based and agnostic of category, which makes Dotcom Reps versed in nearly every major vertical. We don’t just focus on one category we work with all GL categories at AMZN, including KDP. If you are looking to increase your Amazon.com sales, appear on page-one, gain efficiency and traction with PPC, or struggling with brand related issues then look no further.</motion.p>
                <Link href='/contact-amazon-marketing-agency'><motion.button>Let's Talk</motion.button></Link>
            </motion.div>
            {/* <div className={styles['about-circle']}>
                <motion.h2 animate={animation02}>Dotcomreps</motion.h2>
            </div> */}
            </div>
        </div>
    )
}


export default About
