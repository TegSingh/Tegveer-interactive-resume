import React from 'react';
import certificates from '../Data/certificates';
import CertificateCard from './CertificateCard';

const CertificateList = () => {
    return (
        <React.Fragment>
            <h2>Certifications Page</h2>
            {
                certificates.map((certificate) => {
                    return (
                        < CertificateCard {...certificate} />
                    );
                })
            }
        </React.Fragment>
    )
}

export default CertificateList;