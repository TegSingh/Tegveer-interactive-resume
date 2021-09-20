import React, { useState, useEffect } from 'react';
import ProjectDetails from './ProjectDetails';
import { useGlobalContext } from '../context';

const ProjectCard = ({ id, title, category, technologies, completion, description, image, source }) => {

    const { seeProjectDetails, display_project_id, showProjectDetails } = useGlobalContext()
    const details = { id, category, technologies, completion, description, source };

    if (seeProjectDetails && id === display_project_id) {
        return (
            <React.Fragment>
                <section key={id} className="card">
                    <p className="card-title">{title}</p>
                    <div>
                        <img key={id} src={image} alt={title} className="card-image" />
                    </div>
                    <button className="card-button" onClick={() => showProjectDetails(id)}>See details</button>
                </section>
                <div className="card-details">
                    <ProjectDetails {...details} />
                </div>
            </React.Fragment >
        )
    }
    else {
        return (
            <React.Fragment>
                <section key={id} className="card">
                    <p className="card-title">{title}</p>
                    <div>
                        <img key={id} src={image} alt={title} className="card-image" />
                    </div>
                    <button className="card-button" onClick={() => showProjectDetails(id)}>See details</button>
                </section>
            </React.Fragment>
        )
    }
}

export default ProjectCard;