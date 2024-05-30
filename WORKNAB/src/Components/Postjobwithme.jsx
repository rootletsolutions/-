import React, { useState } from 'react';
import '../CSS/Postwithme.css';
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
const Postjobwithme = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyRepresentativeFirstName: '',
        companyRepresentativeLastName: '',
        email: '',
        phone1: '',
        phone2: '',
        address: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        projectName: '',
        projectAddress: '',
        projectAddressLine2: '',
        projectCity: '',
        projectState: '',
        projectZip: '',
        hasSuperintendent: false,
        projectStartDate: '',
        anticipatedCompletionDate: '',
        totalLaborRequested: '',
        projectBriefDescription: '',
        DavisBacon: false,
        enclosedWorkersComp: false,
        insuranceProgram: false,
        OSHARequired: false,
        selectedOSHA: '',
        insuranceType: [],
        projectImage: null,
        laborRates: [],
        ppeTypes: [],
        workTypes: [],
        equipmentCertsRequired: '',
        toolsProvided: [],
        totalRates: {
            foreman: 0,
            journeyman: 0,
            apprentice: 0,
            generalLabor: 0,
        },
        totalCrew: 0,
        totalCrewRate: 0,
        representativeName: '',
        projectStart: '',
    });

    const [rates, setRates] = useState({
        foreman: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        journeyman: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        apprentice: { withoutHousing: 0, withHousing: 0, quantity: 0 },
        generalLabor: { withoutHousing: 0, withHousing: 0, quantity: 0 },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, projectImage: e.target.files[0] });
    };

    const handleRateChange = (e, role, type) => {
        const { value } = e.target;
        setRates({
            ...rates,
            [role]: {
                ...rates[role],
                [type]: type === 'quantity' ? parseInt(value, 10) : parseFloat(value),
            },
        });
    };

    const calculateTotal = (type) => {
        return (
            rates.foreman[type] * rates.foreman.quantity +
            rates.journeyman[type] * rates.journeyman.quantity +
            rates.apprentice[type] * rates.apprentice.quantity +
            rates.generalLabor[type] * rates.generalLabor.quantity
        ).toFixed(2);
    };

    const calculateBlendedRate = (type) => {
        const totalQuantity =
            rates.foreman.quantity +
            rates.journeyman.quantity +
            rates.apprentice.quantity +
            rates.generalLabor.quantity;
        const totalCost = calculateTotal(type);
        return totalQuantity > 0 ? (totalCost / totalQuantity).toFixed(2) : '0.00';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const [crewRate, setCrewRate] = useState(0.13);

    const handleInputChange = (e) => {
        setCrewRate(e.target.value);
    };
        const [representativeName, setRepresentativeName] = useState('');
        const [startDate, setStartDate] = useState('');

        const handleSubmit2 = (event) => {
            event.preventDefault();
            console.log('Form Submitted');
            console.log('Name of Representative:', representativeName);
            console.log('Project Start Date:', startDate);

            // Add your form submission logic here
        };

        return (
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
                                <li><a href="/glazier">Glaziers</a></li>
                                <li><a href="/generallabour">General labor</a></li>
                                <li><a href="postjobwithme">Post Jobs With Me</a></li>
                                <li><a href='/maintainclientprofile'>Maintain Client Profile</a></li>
                                <li><a href="workwithme">Work With Me</a></li>
                                <li><a href="seeyourcart">See your Cart</a></li>
                            </ul>
                        </nav><br /><br />
                        <div className="form">
                            <input type="text" placeholder="Location" />
                            <input type="text" placeholder="Expertise" />
                            <input type="text" placeholder="Tools" />
                            <input type="text" placeholder="PPE" />
                            <input type="text" placeholder="Certifications" />
                        </div>
                    </div>
                </div>
                <div className='post'>
                    <h2>Create Your Free Project Posting Now</h2>
                    <h3>Free Request Quote</h3>
                    <from className='Signup'>
                        <div className='sign'>
                            <p>Company information:</p><br /><br />
                            <input type='text' placeholder='Company Name' /><br /><br />
                            <input type='text' placeholder='First Name' /><br /><br />
                            <input type='text' placeholder='Last Name' /><br /><br />
                            <input type='text' placeholder='Email' /><br /><br />
                            <input type='text' placeholder='Mobile Number' /><br /><br />
                            <input type='text' placeholder='Address' /><br /><br />
                            <input type='text' placeholder='Country code' /><br /><br />
                            <input type='password' placeholder='City' /><br /><br />
                            <input type='password' placeholder='State/Province' /><br /><br />
                            <input type='password' placeholder='Postal Code' /><br /><br />
                            <p>Project information:</p><br /><br />
                            <input type='text' placeholder='Project Name' /><br /><br />
                            <input type='text' placeholder='Street Address' /><br /><br />
                            <input type='text' placeholder='Street Address No#02' /><br /><br />
                            <input type='text' placeholder='City' /><br /><br />
                            <input type='text' placeholder='Postal/Zip code' /><br /><br />
                        </div>
                        <section className="laborrate">
                            <p>Labor Rate Calculator</p>
                            <p>This Rate is For 1 Worker Per Hour</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Calculate Hourly Rate (Without Housing)</th>
                                        <th>Calculate Hourly Rate (With Housing)</th>
                                        <th>Quantity / Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(rates).map((role) => (
                                        <tr key={role}>
                                            <td>{role.charAt(0).toUpperCase() + role.slice(1)}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={rates[role].withoutHousing}
                                                    onChange={(e) => handleRateChange(e, role, 'withoutHousing')}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={rates[role].withHousing}
                                                    onChange={(e) => handleRateChange(e, role, 'withHousing')}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={rates[role].quantity}
                                                    onChange={(e) => handleRateChange(e, role, 'quantity')}
                                                /> Workers
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="summary">
                                <div>
                                    <strong>Total Per Hour Without Housing:</strong> ${calculateTotal('withoutHousing')}
                                </div>
                                <div>
                                    <strong>Total Per Hour With Housing:</strong> ${calculateTotal('withHousing')}
                                </div>
                                <div>
                                    <strong>Total Cost of Crew Without Housing:</strong> ${calculateTotal('withoutHousing')}
                                </div>
                                <div>
                                    <strong>Total Cost of Crew With Housing:</strong> ${calculateTotal('withHousing')}
                                </div>
                                <div>
                                    <strong>Blended Rate Without Housing:</strong> ${calculateBlendedRate('withoutHousing')}
                                </div>
                                <div>
                                    <strong>Blended Rate With Housing:</strong> ${calculateBlendedRate('withHousing')}
                                </div>
                            </div>
                        </section>

                    </from>
                </div>
                <div className="form-cont">
                    <h4>Fill Your Requirement According To Category</h4>
                    <div className="category-buttons">
                        {['Foreman', 'Journey Man', 'Apprentice', 'General Labor'].map((category) => (
                            <button
                                key={category}
                                className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="form-section">
                        <h4>Type of PPE Req.</h4>
                        <div className="checkbox-group">
                            {['Select All', 'Hard Hat', 'Safety Glass', 'Boots', 'Safety Vest', 'Harness', 'Back Brace', 'Gloves'].map((item) => (
                                <label key={item}>
                                    <input type="checkbox" name="ppe" value={item} />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-section">
                        <h4>Type of Work</h4>
                        <div className="checkbox-group">
                            {[
                                'Handrails', 'Skylights', 'Canopies', 'Commercial Windows', 'Residential Windows',
                                'Louvers', 'All-Glass Entrances', 'Curtain Wall Entrances', 'Sliding Entrances',
                                'Terrace Entrance', 'Automatic Entrances', 'Blast Mitigation', 'Hurricane Resistant',
                                'Sun Control', 'Consultation', 'Estimation', 'Glass Fabrication', 'Auto Glass',
                                'Glass Showcases', 'Glass Shelving', 'Break Metal', 'Metal Composite Panels',
                                'Glass Stairways', 'Crane Operator', 'Equipment Operator', 'Storefront',
                                'Stick Built Curtain Wall', 'Entrances', 'Window Wall', 'Unitized Curtain Wall',
                                'Modular Wall', 'Mirrors', 'Hardware', 'Hollow Metal Frames', 'Security Glazing',
                                'Sealants / Caulking', 'Storefront Entrances', 'Safety', 'Glass Handling',
                                'Glass Cutting', 'Glass Polishing', 'Project Management', 'Drafting', 'Engineering',
                                'Water Testing', 'Marketing', 'Sales', 'Procurement', 'Shop Drawings',
                                'Specifications', 'ProCore'
                            ].map((item) => (
                                <label key={item}>
                                    <input type="checkbox" name="work" value={item} />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="contain">
                    <h4>Equipment Certs Required</h4>
                    <div className="certs">
                        {['Industrial Forklift', 'Boom Forklift', 'Aerial Work Platform Lift', 'Swing Stage', 'Scaffold', 'Boom Truck/ Crane', 'OSHA 10', 'Fall Protection', 'Rigging', 'Crane', 'Telehandler', 'Arial Work Platform'].map(cert => (
                            <div key={cert} className="cert">
                                <label>{cert}</label>
                                <input type="radio" name={cert} value="yes" /> Yes
                                <input type="radio" name={cert} value="no" defaultChecked /> No
                            </div>
                        ))}
                    </div>

                    <h4>Tools Each Independent Subcontractor Must Provide *</h4>
                    <div className="tools">
                        {['Select All', 'Tool Bag', 'Vinyl Roller', 'Vice Grips', 'Hammer', 'File Set', 'Channel Locks', 'Dust Brush', 'needle nose pliers', 'rubber mallet'].map(tool => (
                            <div key={tool} className="tool">
                                <input type="checkbox" id={tool} />
                                <label htmlFor={tool}>{tool}</label>
                            </div>
                        ))}
                    </div>

                    <button className="add-requirement">Add Requirement</button>

                    <div className="summary">
                        <h4>Summary</h4><br /><br />
                        <div className="crew-rates">
                            {['Foreman', 'Journey Man', 'Apprentice', 'General Labor'].map(role => (
                                <div key={role} className="crew-rate">
                                    <label>{role}</label>
                                    <input type="number" defaultValue={0} />
                                </div>
                            ))}
                        </div>
                        <div className="total-crew">
                            <label>Total Crew: </label>
                            <input type="number" defaultValue={0} />
                        </div>
                        <div className="total-crew-rate">
                            <label>Total Crew Rate Per Hour: </label>
                            <input type="number" value={crewRate} onChange={handleInputChange} />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit2}>
                        <div className="note">
                            <p>Note: Rates are subject to change if the project has any Insurance Program requirements such as but not limited to LCP tracker, Davis Bacon, CCIP, OCIP, ROCIP. If any of these programs are required Worknab must be notified before the project starts. Because these forms take proper timing to be filled out and completed correctly, Worknab will not be able to rush the process. Worknab must also be notified in advance if the job requires prevailing wages or any fringe benefits. If Worknab is not aware of any program before the start of the project the glass contractor will be held responsible for paying any additional rates/fees to Worknab to meet project requirements.</p>
                        </div>
                        <div className="agreement">
                            <p>By submitting this request, you agree to have Worknab supply Pricing Quotes for your Labor Request from the following companies: Worknab, Glaziers On Demand.</p>
                        </div>
                        <div className="submitgroup">
                            <label htmlFor="representative-name">Name of Representative</label>
                            <input
                                type="text"
                                id="representative-name"
                                value={representativeName}
                                onChange={(e) => setRepresentativeName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="submitgroup">
                            <label htmlFor="start-date">Project Start Date</label>
                            <input
                                type="date"
                                id="start-date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                    <div className='btnsubmit23'>
                    <button className='submitbtn'>Submit</button>
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
        );
    };

    export default Postjobwithme