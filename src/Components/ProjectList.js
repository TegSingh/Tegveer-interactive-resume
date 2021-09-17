import React from 'react';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    return (
        <React.Fragment>
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