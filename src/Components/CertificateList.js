import React from 'react';
import certificates from '../Data/certificates';
import CertificateCard from './CertificateCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'


const CertificateList = () => {
    return (
        <React.Fragment>
            <div className="certificate-list">
                <h2>Certifications Page</h2>
                {
                    certificates.map((certificate) => {
                        return (
                            < CertificateCard {...certificate} />
                        );
                    })
                }
                <Link to='/' className="home-button-link">Back Home</Link>
            </div>
        </React.Fragment>
    )
}

export default CertificateList;