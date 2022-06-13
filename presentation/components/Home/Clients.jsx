import React, { useContext } from 'react'
import styles from '../../../styles/home/Clients.module.css'
import Slider from 'react-slick'
import {GrNext,GrPrevious} from 'react-icons/gr'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReviewContext } from '../../../application/contexts/ReviewAction';
import { getImg } from '../../../infrastructure/common/imageurl';

let L = 0; 

function Clients() {
    const context = useContext(ReviewContext);
    console.log(context.ReviewState?.reviews[0]?.attributes?.avatar?.data?.attributes?.formats?.thumbnail?.url);
    const next = () =>{
        let cards = document.getElementsByClassName(styles["wrapper-clients-desc"]);
        L=L+1;
        const length = cards.length;
        for (let i of cards) {
            for (let index = 0; index < cards.length-2; index++) {
                if (L===index) {
                    i.style.left=`${-400*index}px`;
                }
            }
            if (L>length-3) {L=length-3;}
        }
    }
    
    const prev = () =>{
        let cards = document.getElementsByClassName(styles["wrapper-clients-desc"]);
        L=L-1;
        console.log(L,cards);
        for (let i of cards) {
            for (let index = 0; index < cards.length-2; index++) {
                if (L===index) {i.style.left=`${-400*index}px`;}
            }
            if (L<0) {L=0;}
        }
    }
    return (
        <div className={styles['clients-main']}>
                <h3>Actual</h3>
                <h2>Customer Testimonials</h2>
            <div className={styles['clients']}>
                {/* <Slider {...settings}> */}
                {
                    context.ReviewState?.reviews?.map(
                        review =>
                        <div className={styles['wrapper-clients-desc']}>
                        <div className={styles['clients-desc']}>
                            <img src={getImg(review?.attributes?.avatar?.data?.attributes?.formats?.thumbnail?.url)}></img>
                            <p>{review?.attributes?.review}</p>
                            <div className={styles['tag-clients']}>
                                <p>{review?.attributes?.name}</p>
                                <p className={styles['sub-tag-clients']}>{review?.attributes?.tag}</p>
                            </div>
                        </div>
                        </div> 
                    )
                }
                {/* <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/Creek-main-02.jpg'></img>
                    <p>From getting listed, establishing Brand Registry, setting up FBA, building out ads, and everything in between, I can't imagine having done this without Dotcom Reps!  They are Amazon experts, and it shows from the very beginning.  We sold 100s of units in just the first few weeks and are now developing strategies to scale.  Adam knows his stuff!</p>
                    <div className={styles['tag-clients']}>
                        <p>Creek Stewart</p>
                        <p className={styles['sub-tag-clients']}>Willow Haven Outdoor Survival & Disaster Preparedness Training</p>
                    </div>
                </div>
                </div>
                <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/david-02.jpg'></img>
                    <p>Dotcom Reps has made our Amazon business turn key for us. The sales that we make day after, day, week after week on Amazon had fueled our business growth and enabled us to develop more products, video and content for our followers. Fast forward to today, we have been working with Dotcom Reps for about a year and adding them to our team was the best decision we have made in the last 12 months</p>
                    <div className={styles['tag-clients']}>
                        <p>David Polczynski</p>
                        <p className={styles['sub-tag-clients']}>Founder - ultimate survival tips</p>
                    </div>
                </div>
                </div>
                <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/Lena-and-Clay-Campbell-02.jpg'></img>
                    <p>As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.</p>
                    <div className={styles['tag-clients']}>
                        <p>Clay & Lena Campell</p>
                        <p className={styles['sub-tag-clients']}>Innovative Beauty Products LLC</p>
                    </div>
                </div>
                </div>
                <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/Jean-Kluver-02.jpg'></img>
                    <p>As first time authors, we were overwhelmed with all the steps involved in listing our book on Amazon. Adam was incredibly helpful, navigating us through various glitches and giving helpful advice when we needed it.  I would recommend him most highly!</p>
                    <div className={styles['tag-clients']}>
                        <p>Jean Kluver</p>
                        <p className={styles['sub-tag-clients']}>High Tech High</p>
                    </div>
                </div>
                </div>
                <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/Dr-Golden-Vitaminpaste-02.jpg'></img>
                    <p>Dotcomreps has taken my product to a new level on Amazon.  From set up to advertising and monitoring, they have done a great job and have always been available. I highly recommend them.  Bruce Golden President Vitaminpaste Toothpaste.</p>
                    <div className={styles['tag-clients']}>
                        <p>Dr. Bruce Golden, DMD</p>
                        <p className={styles['sub-tag-clients']}>Vitaminpaste</p>
                    </div>
                </div>
                </div>
                <div className={styles['wrapper-clients-desc']}>
                <div className={styles['clients-desc']}>
                    <img src='/home/client-01.jpg'></img>
                    <p>I have been working with Dotcom Reps for 10 years and in that time they has become a trusted partner. They know their way around Amazon’s endless web of documentation, something that I have no time for as I run my business. They are always a phone call or email away and normally replies within minutes.</p>
                    <div className={styles['tag-clients']}>
                        <p>Paul Iannuzzo</p>
                        <p className={styles['sub-tag-clients']}>Managing Director, ABBE Laboratories, Inc.</p>
                    </div>
                </div>
                </div> */}
            </div>
                <div className={styles['btn-slider']}>
                    <button onClick={()=>prev()}><GrPrevious></GrPrevious></button>
                    <button onClick={()=>next()}><GrNext></GrNext></button>
                </div>
        </div>
    )
}

export default Clients
