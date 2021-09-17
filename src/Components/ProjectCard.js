import React, { useState, useEffect } from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ id, title, category, technologies, completion, description, image }) => {

    const [seeDetails, setSeeDetails] = useState(false);
    const details = { id, category, technologies, completion, description };

    return (
        <React.Fragment>
            <section className="card">
                <p className="card-title">{title}</p>
                <div>
                    <img key={id} src={image} alt={title} className="card-image" />
                </div>
                <button className="card-button" onClick={() => setSeeDetails(!seeDetails)}>See details</button>
            </section>
            {seeDetails &&
                <div className="card-details">
                    <ProjectDetails {...details} />
                </div>
            }
        </React.Fragment>
    )
}

export default ProjectCard;