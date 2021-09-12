import React from 'react';
import projects from '../Data/projects';

const Projects = () => {
    return (
        <React.Fragment>
            <h2>Projects Page</h2>
            {
                projects.map((project) => {
                    return (
                        <React.Fragment>
                            <img src={project.image} alt={project.title} />
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Projects;
