import React, { useState,useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../../styles/home/Question.module.css'


function Question() {
    const {ref,inView} = useInView();
    const animation01 = useAnimation();
    const animation02 = useAnimation();
    useEffect(()=>{
        if (inView) {
            animation01.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.4
                }
            })
            animation02.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.4,
                    delay:0.6
                }
            })
        } else if(!inView) {
            animation01.start({
                opacity:0,
                x:-200,
                transition:{
                    duration:0.4
                }
            })
            
            animation02.start({
                opacity:0,
                x:-200,
                transition:{
                    duration:0.4,
                    delay:0.6
                }
            })
        }
    },[inView])
    const [thing, setThing] = useState(0);
    const thingFunc = (id) => {
        setThing(id);
    }
    return (
        <div ref={ref} className={styles.about} id="about">
            <div className={styles['wrapper-about']}>
            <div className={styles.left_about}>
                <motion.h2 className={styles.heading_about}>Why Choose Us?</motion.h2>
                <div  className={styles.desc_about}>
                <motion.div className={styles.about_nav}>
                    <ul>
                        <li onClick={() => { thingFunc(0) }} className={(thing === 0) ? styles.active : ""} id="thing0">Customer Support</li>
                        <li onClick={() => { thingFunc(1) }} className={(thing === 1) ? styles.active : ""} id="thing1">10+ years Experience</li>
                        <li onClick={() => { thingFunc(2) }} className={(thing === 2) ? styles.active : ""} id="thing2">Affordable Services</li>
                        {/* <li onClick={() => { thingFunc(3) }} className={(thing === 3) ? styles.active : ""} id="thing3">Based in</li> */}
                        <hr></hr>
                    </ul>
                </motion.div>
                <motion.div className={styles.list_about}>
                    {
                        (thing === 0) ? <div className={styles.skills}>
                            {/* {
                                skills.map((skill) =>
                                    <div className={styles.skill} key={skill.title}>
                                        <h1>{skill.title}</h1>
                                        <p>{skill.desc}</p>
                                    </div>
                                )
                            } */}
                            <p>Conveniently located on the East Coast. Hours of operation: Monday – Friday, 9am – 6pm. Unlimited support via email is guaranteed. We are able to offer a small business feel. With our team, you will not be lost in the shuffle and are always made a top priority.</p>
                        </div>

                            : (thing === 1) ? <div className={styles.skills}>
                                {/* {
                                    accolades.map((accolades) =>
                                        <div className={styles.skill} key={accolades.title}>
                                            <h1>{accolades.title}</h1>
                                            <p>{accolades.desc}</p>
                                        </div>
                                    )
                                } */}
                                <p>Dotcom Reps, LLC was established in 2009 and has an industry leading reputation as a premium Independent Manufacturer’s Rep Firm. We represent a multitude of Platinum and Gold level sellers and Service many different brand owners across Vendor Central and Seller Central. Dotcom Reps is also a registered member of the Amazon Ads Partner Network.</p>
                            </div>
                                : (thing === 2) ? <div className={`${styles.skills} ${styles.last_skill}`}>
                                    {/* {
                                        experience.map((expe) =>
                                            <div className={styles.skill} key={expe.title}>
                                                <h1>{expe.title}</h1>
                                                <p>{expe.desc}</p>
                                            </div>
                                        )
                                    } */}
                                    <p>Please ask us for more information on business terms and pricing. We can tier pricing depending on your category, size, and margins. We realize Amazon.com consultant contracts should not be one-size-fits-all and are able to tailor services to meet your company’s specific needs.</p>
                                </div>
                                    // : (thing === 3) ? <div className={styles.skills}>
                                    //     {
                                    //         based.map((bas) =>
                                    //             <div className={styles.skill} key={bas.title}>
                                    //                 <h1>{bas.title}</h1>
                                    //                 <p>{bas.desc}</p>
                                    //             </div>
                                    //         )
                                    //     }
                                    // </div>
                                        : null
                    }
                </motion.div>
                </div>
            </div>
            <div className={styles.right_about}>
                <img src="/home/why-choose-2.png" alt="about"></img>
            </div>
            </div>
        </div>
    )
}


export default Question