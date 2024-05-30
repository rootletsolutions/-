import React from 'react'
import '../CSS/Intro1.css'
import { FaTv } from 'react-icons/fa'
import { BiInjection } from 'react-icons/bi'
import { BsFileEarmark } from 'react-icons/bs'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Intro1 = () => {
    return (
        <div>
            <div>
                <header className="header">
                    <img
                        src="../../public/assest/logo.png"
                        alt="WorkNab Logo"
                        className="logo"
                    />
                </header>
                <div className="banner">
                    <div className="container">
                        <div className="header">
                            <img
                                src="../../public/assest/home1.png"
                                alt="Header"
                                className="header-img"
                            />
                        </div>
                        <div className="circle">
                            <p>GLAZIERS ON DEMAND</p>
                        </div>
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <a href="/aboutus">About Agent |</a>
                                </li>
                                <li>
                                    <a href="/feature">Featured Projects |</a>
                                </li>
                                <li>
                                    <a href="/availablejobs">Available Jobs |</a>
                                </li>
                                <li>
                                    <a href="/wherewework">Where we Work |</a>
                                </li>
                                <li>
                                    <a href="#">Store |</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="subnav">
                            <ul>
                                <li>
                                    <a href="/glazier">Glaziers</a>
                                </li>
                                <li>
                                    <a href="/generallabour">General labour</a>
                                </li>
                                <li>
                                    <a href="postjobwithme">Post Jobs With Me</a>
                                </li>
                                <li><a href='/maintainclientprofile'>Maintain Client Profile</a></li>
                                <li>
                                    <a href="workwithme">Work With Me</a>
                                </li>
                                <li>
                                    <a href="seeyourcart">See your Cart</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="form">
                            <input type="text" placeholder="Location" />
                            <input type="text" placeholder="Expertise" />
                            <input type="text" placeholder="Tools" />
                            <input type="text" placeholder="PPE" />
                            <input type="text" placeholder="Certifications" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-section" id="general-labors">
                <h2>Featured <span>General Labors</span></h2>
                <div className='intro'>
                    <div className='intro1'>
                        <img src='../../public/assest/card11.png' />
                    </div>
                    <div className='introcontent'>
                        <h4>
                            Yennefer
                            <span>(Journeyman)</span>
                        </h4>
                        <ul>
                            <li>Based out of</li>
                            <li>Will trave</li>
                            <li>Position seeking</li>
                            <li>Years of experience</li>
                            <li>Previous employers</li>
                            <li>Fluent languages</li>
                            <li>Transportation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='exper'>
                <h4>Expertise</h4>
                <div className='nextcard'>
                    <div className='crd1'>
                    <FaTv/>
                    <p>View Background Check</p>
                    </div>
                    <div className='crd1'>
                    <BiInjection/>
                    <p>View Drug test Result</p>
                    </div>
                    <div className='crd1'>
                    <AiTwotoneSafetyCertificate/>
                    <p>View Equipment Certification</p>
                    </div>
                    <div className='crd1'>
                    <GiWeightLiftingUp/>
                    <p>View Safety Certification</p>
                    </div>
                </div>
            </div>
            <div className="logo11">
              <img src="../../public/assest/logo.png" />
              <p>Never Accept Boundaries</p>
            </div>
            <footer className="footer">
              <div className="footer-text">
                <p>Follow Our Social Media</p>
                <div className="social-links">
                  <BsWhatsapp />
                  <FaFacebook />
                  <BsInstagram />
                  <BsYoutube />
                </div>
              </div>
              <div className="footer-links">
                <a href="#Free Jobs Posting">Free Jobs Posting</a>
                <a href="#Available Jobs">Available Jobs</a>
                <a href="#About US">About US</a>
                <a href="#Why Choose us">Why Choose us</a>
              </div>
              <div className="footer-second">
                <a href="#Support">Support</a>
                <a href="#Help Center">Help Center</a>
                <a href="#Privacy Policy">Privacy Policy</a>
                <a href="#Terms and condition">Terms and condition</a>
              </div>
              <p className="final">
                Copyright and Company Information : WorkNab © 2024. All rights
                reserved.
              </p>
            </footer>
        </div>
    )
}

export default Intro1
