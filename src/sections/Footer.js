import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Delhi</li>
                                <li>Kochi</li>
                                <li>Mumbai</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Mon - Wed: 10:00AM - 12:00AM</li>
                                <li>Fri: 12:00PM - 1:00AM</li>
                                <li>Sat - Sun: 10:30AM - 12:00AM</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>101 MG Road, New Delhi</li>
                                <li>Tel: 0478 223 0678</li>
                                <li>Email: help@littlelemon.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2024 Little Lemon Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
