import Link from 'next/link';
import React, { useState } from 'react'
import { useInterval } from 'react-use';
import styles from '../../../styles/home/Card.module.css'

function Card() {
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
    return (
        <div className={styles['cards']}>
            <div className={styles['wrapper-cards']}>
                {detailId===1?
                <div className={styles['card']}>
                    <div className={styles['card-img']}>
                        <img src='/home/acs-02.png' alt='card-img'></img>
                    </div>
                    <div className={styles['right-card']}>
                        <h4>Rank Higher in Search</h4>
                        <p>Amazon.com has become the #1 destination for product research and ecommerce sales.</p>
                        <Link href={`/services/amazon-consultant-service`}><button>Learn More</button></Link>
                    </div>
                </div>:
                <div className={styles['card']}>
                    <div className={styles['card-img']}>
                        <img src='/home/A9-SEO.png' alt='card-img'></img>
                    </div>
                    <div className={styles['right-card']}>
                        <h4>Improve Content</h4>
                        <p>By improving your content, you can increase interaction and interest within your target market.</p>
                    <Link href={`/services/amazon-seo-services`}><button>Learn More</button></Link>
                        {/* <button>learn more</button> */}
                    </div>
                </div>
}
{               detailId===1?
                <div className={`${styles['card']} ${styles['card-margin']}`}>
                    <div className={styles['card-img']}>
                        <img src='/home/ppc-02.png' alt='card-img'></img>
                    </div>
                    <div className={styles['right-card']}>
                        <h4>PPC Advertising</h4>
                        <p>With Amazon Advertising (formally AMS) we can bid on strategic keywords to help you.</p>
                        {/* <button>learn more</button> */}
                    <Link href={`/services/amazon-ppc-advertising`}><button>Learn More</button></Link>
                    </div>
                </div>:
                <div className={`${styles['card']} ${styles['card-margin']}`}>
                    <div className={styles['card-img']}>
                        <img src='/home/cb.png' alt='card-img'></img>
                    </div>
                    <div className={styles['right-card']}>
                        <h4>Cohesive Branding</h4>
                        <p>Rich A+ content for all of your variations, launch a concise store which converts more sales.</p>
                    <Link href={`/services/create-brand-store`}><button>Learn More</button></Link>
                        {/* <button>learn more</button> */}
                    </div>   
                </div>
                }
            </div>
        </div>
    )
}

export default Card
