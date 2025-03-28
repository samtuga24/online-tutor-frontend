import React from 'react'
import logo from '../assets/foot.png'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'
export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-wrap">
                <div className="footer-logo"><img src={logo} alt="" /></div>
                <div className="quick-links">
                    <div className="contact-header">About</div>
                    <div className="contact-items">
                        <div className="about-item">About Us</div>
                    </div>
                </div>
                <div className="tutors">
                    <div className="contact-header">Tutors</div>
                    <div className="contact-items">
                        <div className="about-item">Mathematics</div>
                    </div>

                    <div className="contact-items">
                        <div className="about-item">Physics</div>
                    </div>

                    <div className="contact-items">
                        <div className="about-item">Chemistry</div>
                    </div>
                    <div className="contact-items">
                        <div className="about-item">Biology</div>
                    </div>

                    <div className="contact-items">
                        <div className="about-item">English</div>
                    </div>

                    <div className="contact-items">
                        <div className="about-item">Science</div>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-header">Contact Us</div>
                    <div className="contact-items">
                        <div className="item-icon"><FaEnvelope /></div>
                        <div className="item-1">jude@jude.com</div>
                    </div>

                    <div className="contact-items">
                        <div className="item-icon"><FaPhone /></div>
                        <div className="item-1">jude@jude.com</div>
                    </div>

                    <div className="contact-items">
                        <div className="item-icon"><FaLocationDot /></div>
                        <div className="item-1">jude@jude.com</div>
                    </div>
                    <div className="socials-wrap">
                        <div className="social-icon"><TiSocialFacebook /></div>
                        <div className="social-icon"><TiSocialTwitter /></div>
                        <div className="social-icon"><TiSocialLinkedin /></div>
                    </div>
                </div>
            </div>
            <div className="copyright">&copy;learn-smart ghana {new Date().getFullYear()}</div>
        </div>
    )
}
