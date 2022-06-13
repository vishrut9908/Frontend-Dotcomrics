import moment from 'moment';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BlogContext } from '../../../application/contexts/BlogAction';
import { getImg } from '../../../infrastructure/common/imageurl';
import styles from '../../../styles/blogs/Blogs.module.css'



function Blogs() {
    const context = useContext(BlogContext);
    const contextArray = context?.BlogState?.blogs
    // ?.sort(
    //     (a,b)=>Date.parse(b?.attributes?.posted)-Date.parse(a?.attributes?.posted)
    // );
    console.log(context.BlogState.blogs);
    return (
        <div className={styles['blog-list']}>
            <div className={styles["wrapper-blog-list"]}>
            {
                contextArray.map(
                    (val,i) =><Link key={val?.id} href={`/amazon-marketing-blog/${val?.attributes?.slug}`}><div className={styles['blog-ind']}>
                        <div className={styles['wrapper-blog-ind']}>
                        <div className={styles['blog-indi-img']}>
                            <img src={getImg(val?.attributes?.image?.data?.attributes?.url)}></img>
                        </div>
                        <p className={styles['date-blog']}>{moment(val?.attributes?.posted).format("MM-DD-YYYY")}</p>
                        <h2>{val?.attributes?.title?.slice(0,35)+'...'}</h2>
                        <p>By {val?.attributes?.publisher}</p>
                        </div>
                    </div></Link> 
                )
            }
            </div>
        </div>
    )
}

export default Blogs
