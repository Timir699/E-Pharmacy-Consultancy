import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css'



// footer component
const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <Row>
                    <div className="col-lg-6 col-sm-12 text-center">
                        E-Pharmacy & Consultancy
                        <br />
                        Emergency call: <a href="tel:+8801611154975">+88 01611154975</a>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        location: House: 500, Bananni-11, Dhaka
                        <br />
                        Email: <a href="mailto:E-Pharmacy&Consultancy@gamil.com">E-Pharmacy&Consultancy@gamil.com</a>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Footer;