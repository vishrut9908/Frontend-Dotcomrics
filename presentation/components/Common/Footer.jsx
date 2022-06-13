import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype, FaTwitter, FaInstagramSquare, FaPinterest } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { MdCall, MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <footer className='footer'>
            <div className='wrapper-footer'>
                <div className='upper-footer'>
                    <div className='social-media'>
                        {/* <h2>Office Hours</h2> */}
                        <Link href="/"><img src='/Logo-main.png'></img></Link>
                        <p>Dotcom Reps Is An Independent Consulting Firm For Brand Owners And Manufacturers.</p>
                        <div className="social">

                            <a href='https://www.facebook.com/DotcomReps/' target='_blank'><FaFacebook size='1.5rem'></FaFacebook></a>
                            <a href='https://twitter.com/dotcomreps' target='_blank'><FaTwitter size='1.5rem'></FaTwitter></a>
                            <a href='skype:dotcomreps?chat' target='_blank'><FaSkype size='1.6rem'></FaSkype></a>
                            <a href='https://www.linkedin.com/in/awilkens/' target='_blank'><FaLinkedin size='1.5rem'></FaLinkedin></a>
                            <a href='https://www.instagram.com/dotcomreps/' target='_blank'><FaInstagramSquare size='1.5rem' /></a>
                            <a href='https://in.pinterest.com/dotcomreps' target='_blank'><FaPinterest size='1.5rem' /></a>
                        </div>
                    </div>
                    <div className='footer-nav'>
                        <h2>Quick Links</h2>
                        <div className="wrapper-link">
                            {/* <Link href='/'><p>Home</p></Link> */}
                            <Link href='/about-amazon-marketing-agency'><p>About Us</p></Link>
                            {/* <Link href='/services/1'><p>Services</p></Link> */}
                            {/* <Link href='/blogs'><p>Blogs</p></Link> */}
                            {/* <Link href='/books'><p>Books</p></Link> */}
                            {/* <Link href='/contact'><p>Contact Us</p></Link> */}
                            <Link href='/privacy-policy'><p>Privacy Policy</p></Link>
                            <Link href='/terms'><p>Terms</p></Link>
                        </div>
                    </div>
                    <div className='footer-nav'>
                        <h2>Resources</h2>
                        <div className="wrapper-link">
                            {/* <Link href='/'><p>Home</p></Link> */}
                            <Link href='/amazon-marketing-blog'><p>Blogs</p></Link>
                            <Link href='/how-to-sell-amazon-books'><p>Books</p></Link>
                            {/* <Link href='/blogs'><p>Blogs</p></Link> */}
                            {/* <Link href='/books'><p>Books</p></Link> */}
                            <Link href='/our-software'><p>Our Software</p></Link>
                        </div>
                    </div>
                    <div className='footer-nav second-footer'>
                        <h2>Contact Us</h2>
                        <a href='https://www.google.com/maps/place/United+States+Postal+Service/@28.131006,-80.629549,14z/data=!4m5!3m4!1s0x0:0x8481dd03e6273cd2!8m2!3d28.131002!4d-80.6295486?hl=en' target='_blank'><p><IoLocationSharp size="1.5rem"></IoLocationSharp><span>PO Box 360083, Melbourne, FL 32936</span></p></a>
                        <a href='tel:+16102532673' target='_blank'><p><MdCall size="1.5rem"></MdCall><span>(610) 253-2673</span></p></a>
                        <a href='mailto:support@dotcomreps.com' target='_blank'><p><MdEmail size="1.5rem"></MdEmail><span>support@dotcomreps.com</span></p></a>

                    </div>
                    {/* <div className='social-media'>
                <h2>Office Hours</h2>
                    
                <p><span className='days-footer'>Monday:</span> <span>9:00 am EST – 6:00 pm EST</span></p>
                        <p><span className='days-footer'>Tuesday:</span> <span>9:00 am EST – 6:00 pm EST</span></p>
                        <p><span className='days-footer'>Wednesday:</span> <span>9:00 am EST – 6:00 pm EST</span></p>
                        <p><span className='days-footer'>Thursday:</span> <span>9:00 am EST – 6:00 pm EST</span></p>
                        <p><span className='days-footer'>Friday:</span> <span>9:00 am EST – 6:00 pm EST</span></p>
                        </div> */}

                </div>
                <hr />
                <div className='floating-footer'>
                    <h2>All Rights Reserved By © DotCom Reps, LLC 2009-2022.</h2>
                    <h2>Dotcom Reps LLC is not owned, operated by, or directly related to Amazon.</h2>

                </div>
            </div>
        </footer>
    )
}

export default Footer
