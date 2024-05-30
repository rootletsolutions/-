import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import '../CSS/Avilablejobs.css'
import { BiSearch } from 'react-icons/bi'
const Avialablejobs = () => {
    return (
        <div>
            <header className="header">
                <img src="../../public/assest/logo.png" alt="WorkNab Logo" className="logo" />
            </header>
            <div className="banner">
                <div className="container">
                    <div className="header">
                        <img src="../../public/assest/home1.png" alt="Header" className="header-img" />
                    </div>
                    <div className="circle">
                        <p>GLAZIERS ON DEMAND</p>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><a href="/aboutus">About Agent |</a></li>
                            <li><a href="/feature">Featured Projects |</a></li>
                            <li><a href="/availablejobs">Available Jobs |</a></li>
                            <li><a href="/wherewework">Where we Work |</a></li>
                            <li><a href="#">Store |</a></li>
                        </ul>
                    </nav>
                    <nav className="subnav">
                        <ul>
                            <li><a href="/glazier">Glaziers</a></li>
                            <li><a href="/generallabour">General labor</a></li>
                            <li><a href="postjobwithme">Post Jobs With Me</a></li>
                            <li><a href='/maintainclientprofile'>Maintain Client Profile</a></li>
                            <li><a href="workwithme">Work With Me</a></li>
                            <li><a href="seeyourcart">See your Cart</a></li>
                        </ul>
                    </nav><br /><br />
                </div>
            </div>
            <div className='jobs'>
                <h2>Available Jobs</h2>
            </div>
            <div className='mainsearch'>
                <div className='search'>
                    <p>By Project+</p>
                    <p>By category+</p>
                    <p>By State+</p>
                    <p>Sort+</p>
                    <BiSearch />
                </div>
            </div>

            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic3.png' />
                </div>
                <div className='content1'>
                    <h4>Central Plaza 2.0&nbsp;&nbsp;
                        <span className='small'>(LLC)</span>
                    </h4>
                    <p>All Inclusive Rate With Housing : <span>3.125/hr</span>   All Inclusive Rate Without Housing:    <span>3.125/hr</span>    State: <span>Los Angeles, CA, USA</span></p>
                    <p>Journey Man <span>(Available)</span></p>
                    <p> Required People: <span>2</span></p>
                    <p><span>2024-05-20</span></p>
                    <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the<br />
                        time of its completion it was the tallest building in Brisbane, holding this title until <br />
                        Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning<br />
                        mechanism in which a section at the top of the building rotates, allowing for <br />
                        the suspension of outdoor window  More........................</p>
                    <div className='mainbtn'>
                        <button className='btn'>Apply Now</button>
                    </div>
                </div>
            </div><br/>
            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic4.png' />
                </div>
                <div className='content1'>
                    <h4>Central Plaza 2.0&nbsp;&nbsp;
                        <span className='small'>(LLC)</span>
                    </h4>
                    <p>All Inclusive Rate With Housing : <span>3.125/hr</span>   All Inclusive Rate Without Housing:    <span>3.125/hr</span>    State: <span>Los Angeles, CA, USA</span></p>
                    <p>Journey Man <span>(Available)</span></p>
                    <p> Required People: <span>2</span></p>
                    <p><span>2024-05-20</span></p>
                    <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the<br />
                        time of its completion it was the tallest building in Brisbane, holding this title until <br />
                        Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning<br />
                        mechanism in which a section at the top of the building rotates, allowing for <br />
                        the suspension of outdoor window  More........................</p>
                    <div className='mainbtn'>
                        <button className='btn'>Apply Now</button>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic5.png' />
                </div>
                <div className='content1'>
                    <h4>Central Plaza 2.0&nbsp;&nbsp;
                        <span className='small'>(LLC)</span>
                    </h4>
                    <p>All Inclusive Rate With Housing : <span>3.125/hr</span>   All Inclusive Rate Without Housing:    <span>3.125/hr</span>    State: <span>Los Angeles, CA, USA</span></p>
                    <p>Journey Man <span>(Available)</span></p>
                    <p> Required People: <span>2</span></p>
                    <p><span>2024-05-20</span></p>
                    <p>Central Plaza One a skyscraper in the city of Brisbane, Queensland, Australia. At the<br />
                        time of its completion it was the tallest building in Brisbane, holding this title until <br />
                        Riparian Plaza’s completion in 2005. Central Plaza One has a unique window cleaning<br />
                        mechanism in which a section at the top of the building rotates, allowing for <br />
                        the suspension of outdoor window  More........................</p>
                    <div className='mainbtn'>
                        <button className='btn'>Apply Now</button>
                    </div>
                </div>
            </div>
            <div className='logo11'>
                <img src='../../public/assest/logo.png' />
                <p>Never Accept Boundaries</p>
            </div>
            <footer className="footer">
                <div className='footer-text'>
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
                <div className='footer-second'>
                    <a href="#Support">Support</a>
                    <a href="#Help Center">Help Center</a>
                    <a href="#Privacy Policy">Privacy Policy</a>
                    <a href="#Terms and condition">Terms and condition</a>
                </div>
                <p className='final'>Copyright and Company Information : WorkNab © 2024. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Avialablejobs
