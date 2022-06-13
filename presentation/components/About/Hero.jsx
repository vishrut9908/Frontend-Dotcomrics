import React from 'react'
import styles from '../../../styles/about/Hero.module.css'

function Hero() {
    return (
        <div className={styles['hero-about']}>
            <div className={styles["wrapper-hero-about"]}>
            {/* <h2>About Us</h2>
            <h1>Amazon Marketing Agency</h1> */}
            <div className={styles['left-about']}>
            {/* <img src='/about/about-us-01.png'></img> */}
            <img src='/about/about-main-banner.png'></img>
            <p>Established in 2009, Dotcom Reps LLC is a consulting agency & independent manufacturer’s rep firm specializing in selling on Amazon. Our function is to manage your sales and marketing on Amazon. We work for manufacturers to create and further develop a customer base without dramatically increasing overhead or making drastic changes to existing business models. By expanding your online retail presence (increasing your digital footprint) with our eCommerce sales rep service you will increase your gross sales. We have over 10 years of experience using Vendor Central (1P) and Seller Central (3P), along with Brand Registry, KDP, Author Central, AMS, AMG, A+ content, Vine, and other valuable Amazon tools. Our primary service specialties include Amazon PPC management and Content Development.</p>
            </div>
            <div className={styles['right-about']}>
            <p>Our mission is properly consult you on best practices while selling on Amazon. You can expect high levels of customer service and responsiveness along with years of platform knowledge in order to catapult your brand into keyword relevance. Based on experience our customers will see increased profit margin online vs traditional brick and mortar. E-commerce reduces the barriers to entry and costs associated with generating traffic (awareness) to the brand or product(s). This translates into less risk for the brand owner and an increased chance of success with equal investment in marketing. In most cases our services will be completely risk free and cost-effective for your business. Our services in a sense pay for themselves. We are available for long term and short-term contracts, hourly and commission-based. We have also developed an extensive relationship with other service suppliers including graphic artists, automation providers, sales data & analytics tracking, and other integrations to make your Amazon business run smoother.</p>
            <img src='/about/about-main-banner-02.png'></img>
            </div>
            </div>
        </div>
    )
}

export default Hero
