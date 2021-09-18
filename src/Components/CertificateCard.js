import React from 'react';

const CertificateCard = ({ id, title, organization, completion, skills, description, image }) => {

    return (
        <React.Fragment>
            <section key={id} className="card" onMouseOver={() => console.log("hello")}>
                <p className="card-title">{title}</p>
                <img key={id} src={image} alt={title} className="card-image" />
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