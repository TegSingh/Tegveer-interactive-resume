import React from 'react';
import projects from '../Data/projects';
import ProjectList from '../Components/ProjectList';

const Projects = () => {
    return (
        <React.Fragment>
            <h2>Projects Page</h2>
            <ProjectList />
        </React.Fragment>
    )
}

export default Projects;
