import React from 'react';
import certificates from '../Data/certificates';
import CertificateCard from './CertificateCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'


const CertificateList = () => {
    return (
        <React.Fragment>
            <div className="certificate-list">
                <div className="name-title">
                    <div className="name-title-left">
                        <h1>Licenses and Certifcations</h1>
                    </div>
                    <div className="name-title-right">
                        <Link to='/' className="home-button-link">Back Home</Link>
                    </div>
                </div>
                <div className="space"></div>
                <div className="underline"></div>
                <div>
                    {
                        certificates.map((certificate, index) => {
                            return (
                                < CertificateCard key={index} {...certificate} />
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default CertificateList;