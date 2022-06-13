import React,{useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {BsFacebook,BsDribbble,BsBehance,BsLinkedin} from 'react-icons/bs'

function Contact() {
    const {ref,inView} = useInView();
    const animation01 = useAnimation();
    const animation02 = useAnimation();
    useEffect(()=>{
        if (inView) {
            animation01.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.8,
                }
            })
            animation02.start({
                x:0,
                opacity:1,
                transition:{
                    duration:0.8,
                }
            })
        } else if(!inView) {
            animation01.start({
                opacity:0,
                x:-200,
                transition:{
                    duration:0.8
                }
            })
            
            animation02.start({
                opacity:0,
                x:200,
                transition:{
                    duration:0.8,
                }
            })
        }
    },[inView])
    return (
        <div ref={ref} className='contact-comp'>
            <motion.div animate={animation01} className='floating-img-contact float-top-right'>
                <img src='/common/computer.png'></img>
            </motion.div>
            <motion.div animate={animation02} className='floating-img-contact float-bottom-right'>
                <img src='/common/message-02.png'></img>
            </motion.div>
            <motion.div animate={animation02} className='floating-img-contact float-top-right-center'>
                <img src='/common/offer-pic.png'></img>
            </motion.div>
            <div className='contact-comp-wrapper'>
            <div className="form-content-left">
                <h3>Say hello</h3>
                <h2>Let's Work <br/>Together</h2>
                <p>Let us help you solve all your business challenges <br/>in branding and digital with creative ideas. </p>
                <p className='bold-form-contact'>Call us on (610) 253-2673</p>
                <motion.img animate={animation01} className='left-img' src="/common/calender-02.png" alt="calender" />
                <div className='contact-left-info'>
                    <div  className='contact-icons-social'>
                        <a>
                            <BsFacebook size="3rem" color='white'></BsFacebook>
                        </a>
                    </div>
                    <div className='contact-icons-social'>
                        <a>
                            <BsDribbble size="3rem" color='white'></BsDribbble>
                        </a>
                    </div>
                    <div className='contact-icons-social'>
                        <a>
                            <BsBehance size="3rem" color='white'></BsBehance>
                        </a>
                    </div>
                    <div className='contact-icons-social'>
                        <a>
                            <BsLinkedin size="3rem" color='white'></BsLinkedin>
                        </a>
                    </div>
                </div>
            </div>
            <div className="form-content-right">
                <form className='form'>
                    {/* <img className='left-img' src="/common/computer.png" alt="computer" /> */}
                    <div className="form-input">
                        <input
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Name'/>
                    </div>
                    <div className="form-input">
                        <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Email'/>
                    </div>
                    <div className="form-input">
                        <select
                        name='email'
                        className='form-input'>
                            <option>What is your Project Type?</option>
                            <option>Brand Registery</option>
                            <option>Brand Design</option>
                            <option>Brand SEO Optimization</option>
                            <option>Logo Design</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <textarea
                        name='message'
                        className='form-input'
                        placeholder='How did you hear us?'/>
                    </div>
                    <button className='form-input-btn'>SEND REQUEST</button>
                </form>
                </div>
                </div>
        </div>
    )
}

export default Contact
