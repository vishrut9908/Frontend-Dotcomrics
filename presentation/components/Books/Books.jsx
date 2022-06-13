import React, { useContext, useMemo } from 'react'
import { BookContext } from '../../../application/contexts/BookAction'
import { getImg } from '../../../infrastructure/common/imageurl';
import styles from '../../../styles/services/Description.module.css'

function Books() {
    const context = useContext(BookContext);
    const contextArray = context?.BookState?.books;
    return (
        <div className={styles['service-desc']}>
            {
                contextArray?.map(
                    (val,i)=>{
                        return(i%2===0?<div className={styles['ser-ind']}>
                        <div className={styles["left-img"]}>
                            <img src={getImg(val?.attributes?.cover?.data?.attributes?.formats?.small?.url)} alt="services-img" />
                        </div>
                        <div className={styles["right-content"]}>
                            <h2>{val?.attributes?.title}</h2>
                            <p>{val?.attributes?.description}</p>
                            <a href={val?.attributes?.url} target='_blank'><button>Checkout on Amazon</button></a>
                            </div>
                    </div>
                            :<div className={`${styles["ser-ind"]} ${styles["ser-even"]} ${styles["ser-book"]}`}>
                            <div className={styles["right-content"]}>
                            <h2>{val?.attributes?.title}</h2>
                            <p>{val?.attributes?.description}</p>
                            <a href={val?.attributes?.url} target='_blank'><button>Checkout on Amazon</button></a>
                            </div>
                            <div className={styles["left-img"]}>    
                                    <img src={getImg(val?.attributes?.cover?.data?.attributes?.formats?.small?.url)} alt="services-img" />
                            </div>
                        </div>
                            )
                    }
                )
            }
        </div>
    )
}

export default Books;
