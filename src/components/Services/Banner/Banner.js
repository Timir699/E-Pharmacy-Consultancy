import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'


// Banner Component
const Banner = () => {
    return (
        <div className="banner text-center">
            <div className="bg-overlay">
                <h2 className="mb-4">Welcome to E-Pharmacy & Consultancy</h2>
                <button type="button" class="btn btn-outline-warning">For Emergency Service</button>
            </div>

        </div>
    );
};

export default Banner;