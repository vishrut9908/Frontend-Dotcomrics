import moment from 'moment'
import Link from 'next/link'
import React, { useRef, useState, useMemo, createRef, useCallback } from 'react'
import { getImg } from '../../../infrastructure/common/imageurl'
import {portfolio} from '../../../infrastructure/Home/Dummy'
import styles from '../../../styles/home/Portfolio.module.css'

const Portfolio = ({blogs=[]})  => {
    return (
        <div className={styles["expertise"]}>
            {/* <div className={styles['ball-expert']}>
                <img src='/home/hand-04.png'></img>
            </div> */}
            {/* <div className={styles['ball-expert-02']}>
                <img src='/home/hand-04.png'></img>
            </div> */}
            {/* <div className={styles['ball-expert-03']}>
                <img src='/home/circle-1.png'></img>
            </div> */}
            <div className={styles["upper-expertise"]}>
                {/* <h3>Our Portfolio</h3> */}
                <h2>Latest Blog Posts</h2>
                <p>Stay informed about the latest tips, tricks, and news of the industry!</p>
            </div>
            <div className={styles["middle-expertise"]}>
                {
                    [0,1,2].map((expert, i)=>{
                        return <div key={blogs[expert]?.id} className={styles["expertise-desc-wrapper"]}>
                            <div className={styles["expertise-desc"]}>
                            <img src={getImg(blogs[expert]?.attributes?.image?.data?.attributes?.url)} className={styles["expertise-img"]}></img>
                        <p className={styles['date-blog']}>{moment(blogs[expert]?.attributes?.posted).format("MM-DD-YYYY")}</p>
                            <h3>{blogs[expert]?.attributes?.title?.slice(0,35)+'...'}</h3>
                            <p>By {blogs[expert]?.attributes?.publisher}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={styles["lower-expertise"]}>
                <Link href='/amazon-marketing-blog'><button className={styles["btn-view-exp"]}>View all</button></Link>
            </div>
        </div>
    )
}
 

export default Portfolio

