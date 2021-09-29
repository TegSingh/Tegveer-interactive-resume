import React from 'react';
import { useGlobalContext } from '../context';

const CertificateCard = ({ id, title, organization, completion, skills, description, image }) => {

    const { seeCertificateDetails, showCertificateDetails } = useGlobalContext()
    return (
        <React.Fragment>
            <section key={id} className="card" onMouseOver={() => showCertificateDetails(id)}>
                <div className="card-header">
                    <p className="card-title">{title}</p>
                    <img key={id} src={image} alt={title} className="card-image" />
                </div>
                <div className="card-info">
                    <h4>{organization}</h4>
                    <div className="underline"></div>
                    <p>{completion}</p>
                    <ul>
                        {skills.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    <p>{description}</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CertificateCard;