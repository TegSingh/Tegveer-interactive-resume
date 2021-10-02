import React from 'react';
import { useGlobalContext } from '../context';

const CertificateCard = ({ id, title, organization, completion, skills, description, image }) => {

    const { seeCertificateDetails, showCertificateDetails, unshowCertificateDetails, display_certificate_id } = useGlobalContext()
    if (id === display_certificate_id) {
        return (
            <React.Fragment>
                <section key={id} className="card" onMouseOver={() => showCertificateDetails(id)} onMouseLeave={() => unshowCertificateDetails(id)}>
                    <div className="card-header">
                        <p className="card-title">{title}</p>
                    </div>
                    <div className="card-info">
                        {skills.map((skill, index) => {
                            return <p key={index} className="certificate-skill">{skill}</p>
                        })}
                        <p>{description}</p>
                    </div>
                </section>
            </React.Fragment >
        )
    } else {
        return (
            <React.Fragment>
                <section key={id} className="card" onMouseOver={() => showCertificateDetails(id)}>
                    <div className="card-header">
                        <p className="card-title">{title}</p>
                    </div>
                    <img key={id} src={image} alt={title} className="card-image" />
                </section>
            </React.Fragment>
        )
    }

}

export default CertificateCard;