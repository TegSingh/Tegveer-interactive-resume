import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const ProjectCard = ({ id, title, category, technologies, completion, description, image, source }) => {

    const { showProjectDetails } = useGlobalContext()

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

export default ProjectCard;