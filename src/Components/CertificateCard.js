import React from 'react';

const CertificateCard = ({ id, title, organization, completion, skills, description, image }) => {
    return (
        <React.Fragment>
            <section>
                <img key={id} src={image} alt={title} />
                <h2>{title}</h2>
                <h4>{organization}</h4>
                <div className="underline"></div>
                <p>{completion}</p>
                <ul>
                    {skills.map((skill) => {
                        return <li>{skill}</li>
                    })}
                </ul>
                <p>{description}</p>
            </section>
        </React.Fragment>
    )
}

export default CertificateCard;