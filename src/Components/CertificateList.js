import React from 'react';
import certificates from '../Data/certificates';
import CertificateCard from './CertificateCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'


const CertificateList = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <h2>Certifications Page</h2>
            {
                certificates.map((certificate) => {
                    return (
                        < CertificateCard {...certificate} />
                    );
                })
            }
            <button className="home-button">
                <Link to='/'>Back Home</Link>
            </button>
        </React.Fragment>
    )
}

export default CertificateList;