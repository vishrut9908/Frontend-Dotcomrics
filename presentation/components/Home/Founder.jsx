import React, {useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../../styles/home/About.module.css'
import Link from 'next/link';


function Founder() {
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
                <img src='/home/adam-bg-01.png'></img>
            </div>
            <motion.div  className={styles['main-about-comp']}>
                <h3>Adam Wilkens</h3>
                <h2>Meet Our Founder</h2>
                <motion.p>My name is Adam Wilkens, I was born in 1981 in Mineola, NY. I come from a long line of entrepreneurs dating back to my Great Grandfather Albert Ross, who started Chain Bike Corporation in 1946, maker of ROSS Bicycles.I graduated from the University of Central Florida in 2004 with a BSBA in Marketing. After graduating I worked in digital and print advertising sales which later transitioned OEM manufacturer's representation. This ultimately led into e-commerce sales management.I opened Dotcom Reps LLC in April 2009; a sales management and consulting firm for manufacturers selling direct to Amazon.com and other large internet retailers.For over a decade I have represented many larger manufacturers and thousands of products in all major selling categories on Amazon.com.</motion.p>
                <Link href='/contact-amazon-marketing-agency'><motion.button >Let's Talk</motion.button></Link>
            </motion.div>
            {/* <div className={styles['about-circle']}>
                <motion.h2 animate={animation02}>Dotcomreps</motion.h2>
            </div> */}
            </div>
        </div>
    )
}


export default Founder
