import React, { useState, useEffect } from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ id, title, category, technologies, completion, description, image }) => {

    const [seeDetails, setSeeDetails] = useState(true);
    const details = { id, category, technologies, completion, description };

    return (
        <React.Fragment>
            <section className="card">
                <p className="card-title">{title}</p>
                <div>
                    <img key={id} src={image} alt={title} className="card-image" />
                </div>
                <button className="card-button" onClick={() => setSeeDetails(!seeDetails)}>See details</button>
                {seeDetails &&
                    <div className="card-details">
                        <ProjectDetails {...details} />
                    </div>
                }

            </section>
        </React.Fragment>
    )
}

export default ProjectCard;