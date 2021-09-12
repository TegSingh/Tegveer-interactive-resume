import React from 'react';
import certificates from '../Data/certificates';

const Certifications = () => {
    return (
        <React.Fragment>
            <h2>Certifications Page</h2>
            {
                certificates.map((certificate) => {
                    const { id, title, organization, completion, skills, description, image } = certificate;
                    console.log(image);
                    return (<React.Fragment>
                        <img key={id} src={image} alt={title} />
                    </React.Fragment>)
                })
            }
        </React.Fragment>
    )
}

export default Certifications;
