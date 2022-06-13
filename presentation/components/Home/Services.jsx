import React,{useEffect} from 'react'
import styles from '../../../styles/home/Services.module.css'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Arrow from '../Common/Arrow';
import Link from 'next/link';

function Services() {
    const {ref,inView} = useInView();
    const animation01 = useAnimation();
    const animation02 = useAnimation();
    const animation03 = useAnimation();
    const animation04 = useAnimation();
    const animation05 = useAnimation();
    const animation06 = useAnimation();

    useEffect(()=>{
        if (inView) {
            animation01.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1
                }
            })
            animation02.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1
                }
            })
            animation03.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1,
                    delay:0.4
                }
            })
            animation04.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1,
                    delay:0.4
                }
            })
            animation05.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1,
                    delay:0.8
                }
            })
            animation06.start({
                x:0,
                opacity:1,
                transition:{
                    duration:1,
                    delay:0.8
                }
            })
        } else if(!inView) {
            animation01.start({
                x:-200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
            animation02.start({
                x:200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
            animation03.start({
                x:-200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
            animation04.start({
                x:200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
            animation05.start({
                x:-200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
            animation06.start({
                x:200,
                opacity:0,
                transition:{
                    duration:1
                }
            })
        }
    },[inView])

    return (
        <div className = {styles["services"]}>
            <h3>Services</h3>
            <h2>For Your Amazon Brand</h2>
            <div  ref={ref} className={styles['service-list']}>
            <Link href='/services/asin-creation-amazon-marketing'>
            <motion.div className={`${styles['service']}`}>
                <motion.img className={styles["service-img"]} src="/home/service-01-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                <h3>Detail Page Creation</h3>
                <p>We work with you to develop titles, bullet features, product description, and images which...</p>
                {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>
            <Link href='/services/amazon-content-optimization'>
            <motion.div className={`${styles['service']}`}>
                <motion.img className={styles["service-img"]}src="/home/service-02-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                <h3>A+ Content Design</h3>
                <p>Take advantage of our creative art department for photography, infographics, and A+ content modules.</p>
                {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>
            <Link href='/services/amazon-seo-services'>
            <motion.div className={`${styles['service']}`}>
                <motion.img className={styles["service-img"]} src="/home/service-03-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                <h3>SEO for Amazon</h3>
                <p>Research the best hidden keywords to utilize on the back-end in order.....</p>
                {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>
            <Link href='/services/amazon-brand-management'>
            <motion.div className={styles["service"]}>
                <motion.img className={styles["service-img"]} src="/home/service-04-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                    <h3>Brand Registry</h3>
                    <p>Ward off knock-offs, copycats, and trademark violators with your Brand Registry...</p>
                    {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>
            <Link href='/services/amazon-promotion-strategy'>
            <motion.div className={`${styles['service']}`}>
                <motion.img className={styles["service-img"]} src="/home/service-05-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                    <h3>Promotion Management</h3>
                    <p>We will manage your full year promotional calendar. This includes slotting coupons...</p>
                    {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>
            <Link href='/services/asin-creation-amazon-marketing'>
            <motion.div className={`${styles['service']}`}>
                <motion.img className={styles["service-img"]} src="/home/service-06-01.png" alt="offer-img" />
                <motion.div className={styles["right-content"]}>
                    <h3>Variations Merges</h3>
                    <p>Combining of like items to aggregate reviews and streamline your offering in order to help...</p>
                    {/* <button className='services-btn'><span>Explore</span><Arrow></Arrow></button> */}
                </motion.div>
            </motion.div>
            </Link>    
            </div>
        </div>
    )
}

export default Services