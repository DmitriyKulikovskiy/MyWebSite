import React from 'react';
import './footer.sass'
import { textFooter } from '../../../assets/text';

const Footer = () => {
    return ( 
        <footer className="container footer-container">
            <div className="row">
                <div className="col-lg-3 footer-box">
                    <p>about us</p>
                    {textFooter}
                </div>
                <div className="col-lg-4 footer-box">
                    <p>contact us</p>
                    <div className="text-footer">
                        56/8, rocky beach road, santa monica, Los angeles, California - 59620
                    </div>
                </div>
                <div className="col-lg-5 footer-box">
                    <p>newsletter</p>
                    <div className="text-footer">
                        You can trust us. we only send promo offers, not a single.
                    </div>
                    <form action="">
                        <input type="text" placeholder='Your email here'/>
                        <button>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="row inf-row">
                <div className="col-lg-8 inf-box">
                    <div className="copyright">
                        Copyright ©2020 All rights reserved | This layout is made by 
                        <a href='https://colorlib.com/'> Colorlib</a> 
                        <br/>
                        (Some changes have been added)
                        <br />
                        Made by <a href='https://www.linkedin.com/in/dmitriy-kulikovskiy-1467711a2/?locale=ru_RU' className='dima'> 
                        Dmitry Kulikovskiy</a> using 
                        <span className='react'> React</span>
                    </div>
                </div>
                <div className="col-lg-4 inf-box">
                    <div className="social-networks-footer">
                        <span className="contact-with-me">
                            Contact with me
                            <span className='fa fa-arrow-right'></span> 
                        </span>
                        <a href='https://t.me/dmitriy_k23' className='fa fa-telegram'></a>
                        <a href='https://www.linkedin.com/in/dmitriy-kulikovskiy-1467711a2/?locale=ru_RU' className='fa fa-linkedin'></a>
                        <a href='https://github.com/DmitriyKulikovskiy' className='fa fa-github'></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;