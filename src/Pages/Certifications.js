import React from 'react';
import certificates from '../Data/certificates';
import CertificateList from '../Components/CertificateList';


const Certifications = () => {
    return (
        <React.Fragment>
            <h2>Certifications Page</h2>
            <CertificateList />
        </React.Fragment>
    )
}

export default Certifications;
