import React from 'react';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    return (
        <React.Fragment>
            <h2>Projects Page</h2>
            {
                projects.map((project) => {
                    return (
                        < ProjectCard {...project} />
                    );
                })
            }
        </React.Fragment>
    )
}

export default ProjectList;