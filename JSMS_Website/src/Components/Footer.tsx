import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
            Email us!
            </p>
            {/* <p className="footer-subscription-text">
            
            </p> */}
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' placeholder='Your email' className="footer-input" /> 
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>about us</h2>
                    <Link to='/signup'>Abouttt</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>awawa</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>about us</h2>
                    <Link to='/signup'>Abouttt</Link>
                    <Link to='/'>Testimonial</Link>
                    <Link to='/'>awawa</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                <Link to='/' className='social-logo'>
                    JSMS
                </Link>
                </div>
                <small className="website-rights">JSMS</small>
                <div className="social-icons">
                    <Link to='/' target='_blank' aria-label='Facebook' className="social-icon-link facebook">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to='/' target='_blank' aria-label='Instagram' className="social-icon-link instagram">
                        <i className="fab fa-instagram"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer