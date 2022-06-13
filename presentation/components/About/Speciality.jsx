import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../styles/about/Speciality.module.css'

function Speciality() {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles['speicalities']}>
            <h2>Our Specialities</h2>
            <div className={`${styles['speciality']} ${styles['sp-01']}`}>
                <div className={styles['sp-img']}>
                    <img src='/about/seller-c.png'></img>
                </div>
                <div className={styles['sp-desc']}>
                    <h3>Seller central – referred to as marketplace or 3rd party</h3>
                    <p>Fulfilled by Amazon (FBA) - You ship your inventory to Amazon Fulfillment Centers via Small Parcel or LTL and they pick, pack, and ship the product. It is available for sale with a Prime badge.</p>
                    <p>Fulfilled by Merchant (FBM) – You manage the pick, pack, and ship direct to consumers who buy your products on Amazon. There is no prime badge unless you are Seller Fulfilled Prime eligible.</p>
                    <Link href='/contact-amazon-marketing-agency'><button>Contact Us</button></Link>
                </div>
            </div>
            <div className={`${styles['speciality']} ${styles['sp-02']} ${open?styles['flex-start']:styles['flex-center']}`}>
                <div className={styles['sp-img']}>
                    <img src='/about/vendor-c.png'></img>
                </div>
                <div className={styles['sp-desc']}>
                    <h3>Vendor central – referred to as retail or 1st party</h3>
                    {
                        !open?
                        <>
                        {/* <p>Fulfilled by Amazon (FBA) - You ship your inventory to Amazon Fulfillment Centers via Small Parcel or LTL and they pick, pack, and ship the product. It is available for sale with a Prime badge.</p>
                        <p>Fulfilled by Merchant (FBM) – You manage the pick, pack, and ship direct to consumers who buy your products on Amazon. There is no prime badge unless you are Seller Fulfilled Prime eligible.......</p> */}
                        <p>Warehouse Orders – Amazon issues planned replenishment purchase orders to your busines every Monday like clock-work. You ship the goods to Amazon and they own the goods, the products appear as ‘Ships from and Sold by Amazon.com’ and include a prime badge. Amazon picks, packs, and ships to the customer.</p>
<p>Direct Fulfillment – Amazon issues dropship orders to you daily, within warehouse operating hours. You ship the product to the Amazon customer directly, but the product shows as ‘Ships from and Sold by Amazon.com’ and include a prime badge.</p>
                        <p className={styles['read-more']} onClick={()=>{setOpen(!open)}}>Read more</p>
                        </>:
                        <>
                        {/* <p>Fulfilled by Amazon (FBA) - You ship your inventory to Amazon Fulfillment Centers via Small Parcel or LTL and they pick, pack, and ship the product. It is available for sale with a Prime badge.</p> */}
                        {/* <p>Fulfilled by Merchant (FBM) – You manage the pick, pack, and ship direct to consumers who buy your products on Amazon. There is no prime badge unless you are Seller Fulfilled Prime eligible.</p> */}
<p>Pallet Program – Amazon issues palletized LTL orders at a reduced cost. You ship the goods to Amazon and they own the goods, the products appear as ‘Ships from and Sold by Amazon.com’ and include a prime badge. Amazon picks, packs, and ships to the customer.</p>
<p>Direct Import – Amazon will order the products from you or your factory If in another country. They pick up the goods from the port in China. They are responsible for the ocean freight and all other expense relating to import and transportation. The container eventually arrives at the Amazon fulfillment center(s) and they own the goods. The products appear as ‘Ships from and Sold by Amazon.com’ and include a prime badge. Amazon picks, packs, and ships to the customer.</p>
<p>Born to Run – Commonly referred to as vendor-initiated Purchase Orders. Amazon has not purchased these products before due to low traffic or visibility, but you want to take the risk of sending them 10 weeks of inventory to kick start the engine. If they don’t sell Amazon will pay for them at a reduced cost or return them back to you. You ship the goods to Amazon and they own the goods, the products appear as ‘Ships from and Sold by Amazon.com’ and include a prime badge. Amazon picks, packs, and ships to the customer.</p>
                        <p className={styles['read-more']} onClick={()=>{setOpen(!open)}}>Read less</p>
                        </>
                    }
                    <Link href='/contact-amazon-marketing-agency'><button>Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Speciality
