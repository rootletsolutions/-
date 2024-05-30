import React from 'react'
import '../CSS/maintainclientprofile.css'
import { MdManageSearch } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import { PiFirstAidKit } from 'react-icons/pi'
import { FaCodePullRequest } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
const Maintainclientprofile = () => (
    <div>
        <div className="app">
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
                            <li><a href='/maintainsubcontracter'>Maintain SubContracter</a></li>
                            <li><a href="seeyourcart">See your Cart</a></li>
                        </ul>
                    </nav><br /><br />
                </div>
            </div>
        </div>
        <div className='maintainprofile'>
            <h4>Maintian Client Profile</h4><br/>
            <div className='crt'>
                <div className='cart'>
                    <MdManageSearch />
                    <p>Manage My Request Quote</p>
                </div>
                <div className='cart'>
                    <IoPersonOutline />
                    <p>Maintain Clients Profile</p>
                </div>
                <div className='cart'>
                    <PiFirstAidKit />
                    <p>Job Porta</p>
                </div>
                <div className='cart'>
                    <FaCodePullRequest />
                    <p>Clients Requests</p>
                </div>
            </div>

        </div><br />
        <div className="profiless">
            <div className="card1">
                <a href="/Intro2"><img src="../../public/assest/card1.png" alt="card 1" /></a>
                <div className='text'>
                    <h4>
                        Giovanni <span>Forman</span></h4><br />
                    <div className='button'>
                        <button className='btn12'> Edit profile</button>
                    </div>
                </div>
            </div>
            <div className='card2'>
                <img src="../../public/assest/card2.png" alt="card 2" />
                <div className='text'>
                    <h4>
                        Giovanni <span>Forman</span></h4><br />
                    <div className='button'>
                        <button className='btn12'> Edit profile</button>
                    </div>
                </div>
            </div>
            <div className='card3'>
                <img src="../../public/assest/card3.png" alt="card 3" />
                <div className='text'>
                    <h4>
                        Giovanni <span>Forman</span></h4><br />
                    <div className='button'>
                        <button className='btn12'> Edit profile</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='client'>
            <h4>Client Request</h4><br/><br/>
            <div className='client1'>
                <h5>Yennefer<span>(Journeyman)</span></h5>
                <p>Lorem ipsum dolor sit amet consectetur. Sit neque diam nibh in eros et facilisis<br />
                    commodo. Quam aliquet enim tristique praesent amet. Rhoncus pulvinar<br />
                    cras gravida varius quis nunc senectus rhoncus tortor.</p>
                <div className='clientbtn'>
                    <button>Sent Request</button>
                    <button>Receive Request</button>
                </div>
            </div>
        </div>
        <div className='cardclient'>
            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic7.png' />
                </div>
                <div className='content'>
                    <h5>Yennefer<span>(Journeyman)</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit neque diam nibh in eros et facilisis<br />
                        commodo. Quam aliquet enim tristique praesent amet. Rhoncus pulvinar<br />
                        cras gravida varius quis nunc senectus rhoncus tortor.</p>
                </div>
            </div><br />
            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic8.png' />
                </div>
                <div className='content'>
                    <h5>Yennefer<span>(Journeyman)</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit neque diam nibh in eros et facilisis<br />
                        commodo. Quam aliquet enim tristique praesent amet. Rhoncus pulvinar<br />
                        cras gravida varius quis nunc senectus rhoncus tortor.</p>
                </div>
            </div>
            <div className='cards'>
                <div className='imges'>
                    <img className='img' src='../../public/assest/pic9.png' />
                </div>
                <div className='content'>
                    <h5>Yennefer<span>(Journeyman)</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit neque diam nibh in eros et facilisis<br />
                        commodo. Quam aliquet enim tristique praesent amet. Rhoncus pulvinar<br />
                        cras gravida varius quis nunc senectus rhoncus tortor.</p>
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

export default Maintainclientprofile
